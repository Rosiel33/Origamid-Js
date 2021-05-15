const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event){
    event.preventDefault();
   linksInternos.forEach((remove)=>{
        remove.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo')
}

linksInternos.forEach((link)=>{
    link.addEventListener('click', handleLink);
})

// const elementos = document.querySelectorAll('body *');

// // function handleElemento(event){
// //     console.log(event.currentTarget.remove());
// // }

// // function handleElemento(event){
// //     console.log(event.currentTarget);
// // }

// elementos.forEach((elemento)=>{
//     elemento.addEventListener('click', handleElemento);
// })


// ZOOM AO SER CLICADO

const zoom = document.querySelectorAll('body');


function handleZoom(event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('zoom')
    }
}
window.addEventListener('keydown', handleZoom);

// outerHTML, innerHTML, innerText - propriedades que retornam string

const menu = document.querySelector('.menu');

console.log(menu.innerHTML);
console.log(menu.outerHTML);
console.log(menu.innerText);

//------------ TRANSVERSING ---------
const lista = document.querySelector('.animais-lista');
// parentElement busca o pai do elemento
console.log(lista.parentElement.parentElement);
console.log('next element')
console.log(lista.nextElementSibling)
console.log('previous element')
console.log(lista.previousElementSibling);

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = document.querySelector('.titulo');

animais.appendChild(titulo);

// move animais/ para lista/antes de titulo
animais.insertBefore(lista,titulo);

// CRIANDO NOVOS ELEMENTOS


const novoh1 =document.createElement('h1');

novoh1.innerText='Novo título'
novoh1.classList.add('novoh1')
animais.appendChild(novoh1);

console.log(novoh1);

// CLONAR ELEMENTOS

const h1 = document.querySelector('h1');

const faq = document.querySelector('.faq');
const cloneh1 = h1.cloneNode(true)
faq.appendChild;