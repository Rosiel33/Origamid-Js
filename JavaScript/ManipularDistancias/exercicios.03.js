const menuDp = document.querySelector('.menu');
const copy = document.querySelector('.copy')

const cloneMenu = menuDp.cloneNode(true);
copy.appendChild(menuDp)

const fq = document.querySelector('.faq ');

const dt = fq.querySelector('dt')

const nextdd= dt.nextElementSibling;
console.log(dt)
console.log(nextdd)

const animais = document.querySelector('.animais');

fq.innerHTML = animais.innerHTML; // subst. faq por conteudo da class animais.
