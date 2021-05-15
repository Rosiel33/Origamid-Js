// SELETOR getElementById - seleciona elementos DOM
const animaisSection = document.getElementById('animais')
console.log(animaisSection);

// SELECT POR CLASSES 
const selectClass = document.getElementsByClassName('grid-section')
console.log(selectClass);
console.log(selectClass.length);

// SELETOR ÚNICO querySelector
const animais = document.querySelector('#animais')
console.log(animais);

// selecionando o primeiro Li 
console.log('primeiroLi');
const primeiroLi = document.querySelector('li');
console.log(primeiroLi);

// SELECIONANDO  LINKS CSS 
console.log('SELECIONANDO  LINKS CSS');
const linksCss = document.querySelector('[href^="https://"]') // ^ siginifica que começa com ...
const linksIniciados = document.querySelector('[href^="#"]') // ^ siginifica que começa com ...

const idAnimais = document.querySelector(' .animais img');
console.log(linksCss);
console.log('linksIniciados');
console.log(linksIniciados);
console.log(' selecinando ids Animais')
console.log(idAnimais);

// BUSCA PRIMEIRO UL 
console.log('BUSCA PRIMEIRO UL ');
const priUl = document.querySelector('ul');
console.log(priUl);

console.log('primeiro Li Dentro de uma Ul ');

const priLiDentroUl = priUl.querySelector('li')

console.log(priLiDentroUl);


console.log('########################')

const gridSectionHtml = document.getElementsByClassName('grid-section');


const gridSectionNode = document.querySelectorAll('.grid-section');

// adcionando  classe no ul

priUl.classList.add('grid-section')
console.log(gridSectionHtml);
console.log(gridSectionNode);


// ARRAY LIKE  HTML E NODELIST são array like, parecem uma array mas não
// são. o método de Array forEach() por ex, exite apenas em nodelist.
console.log('---------------- FOREACH --------');
gridSectionNode.forEach(function(item,index){
    console.log(item,index);
});

// transf. array lke para array

console.log('transf. array lke para array')
const arrayGrid = Array.from(gridSectionHtml);

arrayGrid.forEach(function(item,index){
    console.log(item,index)
})