const imgSite = document.querySelectorAll('img');
console.log(imgSite);

// somente imagens que començão com img
console.log('somente imagens  com img');

const imagensIniciadas = document.querySelectorAll('img[src^="imagens"]');
console.log(' fim somente imagens com img')
const linksInt = document.querySelectorAll('[href^="#"]')
    console.log(linksInt);

const primeiroH2DentroAnimais = document.querySelector('.menu')

primeiroH2DentroAnimais.querySelector('ul');
const primeiroLi = primeiroH2DentroAnimais.querySelector('li');
console.log(primeiroLi);

const priH2 = document.querySelector('.animais-descricao');
console.log(priH2);
const primeiroH2 = priH2.querySelector('h2');
console.log(primeiroH2);

const ultimoP = document.querySelectorAll('p');
 
console.log(ultimoP[24])
console.log(ultimoP[ultimoP.length -1])