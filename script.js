const quadroDePixel = document.getElementById('pixel-board');
const corPreto = document.getElementById('preto');
const corPaleta = document.querySelectorAll('.color');
const limpar = document.getElementById('clear-board');
const tamanhoQuadro = document.getElementById('board-size');
const botaoGerar = document.getElementById('generate-board');

// Requisito 12 - Graças ao site CSS tricks
for (let index = 1; index < corPaleta.length; index++) {
  const aleatorio = Math.floor(Math.random() * 16777215).toString(16);
  corPaleta[index].style.backgroundColor = `#${aleatorio}`;
}

// Requisito 4
for (let index = 1; index <= 5; index++) {
  const linhaDePixel = document.createElement('div');
  quadroDePixel.appendChild(linhaDePixel);
  for (let index2 = 1; index2 <= 5; index2++) {
    const criaPixel = document.createElement('span');
    criaPixel.className = 'pixel';
    linhaDePixel.appendChild(criaPixel);
  }
}
marcaPixel();

corPreto.classList.add('selected'); // Requisito 6

// Requisito 10
botaoGerar.addEventListener('click', gerarQuadro);

function gerarQuadro() {
  if (tamanhoQuadro.value === '') {
    window.alert('Board inválido!');
  }
  while (quadroDePixel.firstChild) {
    quadroDePixel.removeChild(quadroDePixel.firstChild);
  }
  if (tamanhoQuadro.value < 5) { // Requisito 11 (Os dois IF)
    tamanhoQuadro.value = 5;
  }
  if (tamanhoQuadro.value > 50) {
    tamanhoQuadro.value = 50;
  }
  for (let index = 1; index <= tamanhoQuadro.value; index++) {
    const novoPixel = document.createElement('div');
    quadroDePixel.appendChild(novoPixel);
    for (let index2 = 1; index2 <= tamanhoQuadro.value; index2++) {
      const geraPixel = document.createElement('span');
      geraPixel.className = 'pixel';
      novoPixel.appendChild(geraPixel);
      console.log(geraPixel);
    }
  }
  marcaPixel();
}

// Requisito 7
for (let index = 0; index < corPaleta.length; index++) {
  corPaleta[index].addEventListener('click', selecionaCor);
}

function selecionaCor(acao) {
  const selecionado = document.getElementsByClassName('selected')[0];
  selecionado.classList.remove('selected');
  acao.target.classList.add('selected');
}

// Requisito 8
function marcaPixel() { // Criado uma função, para que possa ser chamada novamente após geração de quadro personalizado
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index++) {
    pixel[index].addEventListener('click', pinta);
  }
}

function pinta(cor) { // função realizada graças a pesquisa no w3schools
  const selecao = document.querySelector('.selected');
  const dadosSelecao = window.getComputedStyle(selecao, null);
  const corSelecionada = dadosSelecao.getPropertyValue('background-color');
  cor.target.style.backgroundColor = corSelecionada;
  console.log('função pinta');
}

// Requisito 9
limpar.addEventListener('click', limparQuadro);

function limparQuadro() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index++) {
    pixel[index].style.backgroundColor = 'white';
  }
}

console.log(document.getElementById('pixel'));
