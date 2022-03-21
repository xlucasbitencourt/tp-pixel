let quadroDePixel = document.getElementById('pixel-board');
let corPreto = document.getElementById('cor1');
let corPaleta = document.querySelectorAll('.color');


// Requisito 4
for (let index = 1; index <=5; index ++) {
    let linhaDePixel = document.createElement('div');
    quadroDePixel.appendChild(linhaDePixel);
    for (index2 = 1; index2 <=5; index2++) {
        let criaPixel = document.createElement('span');
        criaPixel.className = 'pixel';
        linhaDePixel.appendChild(criaPixel);
    }
}

corPreto.classList.add('selected'); // Requisito 6


// Requisito 7
for (let index = 0; index < corPaleta.length; index++) {
    corPaleta[index].addEventListener('click', selecionaCor);
}

function selecionaCor (acao) {
    for (let index = 0; index < corPaleta.length; index ++) {
        corPaleta[index].classList.remove('selected');
    }
    acao.target.classList.add('selected');
}

// Requisito 8
let pixel = document.querySelectorAll('.pixel');
for (let index = 0; index < pixel.length; index++) {
    pixel[index].addEventListener('click', pinta);
}

function pinta (cor) {
    const selecao = document.querySelector('.selected');
    const dadosSelecao = window.getComputedStyle(selecao, null);
    let corSelecionada = dadosSelecao.getPropertyValue('background-color');
    cor.target.style.backgroundColor = corSelecionada;
    console.log(selecao);
}
//console.log(pixel);
