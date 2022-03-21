let quadroDePixel = document.getElementById('pixel-board');
let corPreto = document.getElementById('cor1');
let corPaleta = document.querySelectorAll('.color');

// Requisito 4
for (let index = 1; index <=5; index ++) {
    let linhaDePixel = document.createElement('div');
    quadroDePixel.appendChild(linhaDePixel);
    for (index2 = 1; index2 <=5; index2++) {
        let pixel = document.createElement('span');
        pixel.className = 'pixel';
        linhaDePixel.appendChild(pixel);
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


