let quadroDePixel = document.getElementById('pixel-board');
let corPreto = document.getElementById('preto');
let corPaleta = document.querySelectorAll('.color');
let limpar = document.getElementById('clear-board');
let tamanhoQuadro = document.getElementById('board-size');
let botaoGerar = document.getElementById('generate-board');

// Requisito 12
for (let index = 1; index < corPaleta.length; index++) {
    let aleatorio = Math.floor(Math.random()*16777215).toString(16);
    corPaleta[index].style.backgroundColor = '#' + aleatorio;
}


// Requisito 4
for (let index = 1; index <= 5; index++) {
  let linhaDePixel = document.createElement('div');
  quadroDePixel.appendChild(linhaDePixel);
  for (index2 = 1; index2 <= 5; index2++) {
    let criaPixel = document.createElement('span');
    criaPixel.className = 'pixel';
    linhaDePixel.appendChild(criaPixel);
  }
}

corPreto.classList.add('selected'); // Requisito 6


// Requisito 10 - Corrigir a ártir daqui
botaoGerar.addEventListener('click', gerarQuadro);

function gerarQuadro() {
  console.log(tamanhoQuadro.value);
  while (quadroDePixel.firstChild) {
    quadroDePixel.removeChild(quadroDePixel.firstChild);
  }

  // Requisito 11 (Os dois IF)
  if (tamanhoQuadro.value < 5) {
      tamanhoQuadro.value = 5;
  }
  if (tamanhoQuadro.value > 50) {
      tamanhoQuadro.value = 50;
  }

  for (let index = 1; index <= tamanhoQuadro.value; index++) {
    let linhaDePixel = document.createElement('div');
    quadroDePixel.appendChild(linhaDePixel);
    for (index2 = 1; index2 <= tamanhoQuadro.value; index2++) {
      let criaPixel = document.createElement('span');
      criaPixel.className = 'pixel';
      linhaDePixel.appendChild(criaPixel);
      console.log(criaPixel);
    }
  }

}

// Corrigir até aqui


// Requisito 7
for (let index = 0; index < corPaleta.length; index++) {
  corPaleta[index].addEventListener('click', selecionaCor);
}

function selecionaCor(acao) {
  let selecionado = document.getElementsByClassName('selected')[0];
  selecionado.classList.remove('selected');
  acao.target.classList.add('selected');
}


// Requisito 8
let pixel = document.querySelectorAll('.pixel');
for (let index = 0; index < pixel.length; index++) {
  pixel[index].addEventListener('click', pinta);
}

function pinta(cor) { // função realizada graças a pesquisa no w3schools
  const selecao = document.querySelector('.selected');
  const dadosSelecao = window.getComputedStyle(selecao, null);
  let corSelecionada = dadosSelecao.getPropertyValue('background-color');
  cor.target.style.backgroundColor = corSelecionada;
  console.log('teste1');
}

// Requisito 9
limpar.addEventListener('click', limparQuadro);

function limparQuadro() {
  for (let index = 0; index < pixel.length; index++) {
    pixel[index].style.backgroundColor = 'white';
  }
}


console.log(document.getElementById('pixel'));
