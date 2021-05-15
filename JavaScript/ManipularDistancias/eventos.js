// const img = document.querySelector('img');

// function callback(){
//     console.log('clicou')
// }
// // event passa informaçoes do click
// function callback(e){
//     console.log(e);
// }
// img.addEventListener('click',callback);

const imagensLista = document.querySelector('.animais-lista');

function callbackLista(event){
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.type);
    console.log(event.path);
}

imagensLista.addEventListener('click', callbackLista)

console.log(imagensLista)

// event.preventDefault()

function handleLinkExterno(event){
    event.preventDefault();
    console.log(event);
}

const linkExterno = document.querySelector('a[href^="http"]');

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event){
    console.log(event.type, event)
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter',handleEvent);
// h1.addEventListener('mousemove',handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);
// window.addEventListener('keydown', handleEvent);

// EVENTO KEYBOARD

function handleKeyboard(event){

    if(event.key === 'f'){
        document.body.classList.toggle('azul')
    }

    console.log(event.key);

}
window.addEventListener('keydown', handleKeyboard);


// FOREACH E EVENTOS ------------



