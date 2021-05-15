
// SELECIONE TODOS PARAGRAFOS
const paragrafo = document.querySelectorAll('p');

console.log(paragrafo);
paragrafo.forEach((item) =>{
    console.log(item);
})

// MOSTRE O TEXTO DOS PARAGRAGOS

paragrafo.forEach((item)=>{
    console.log(item.innerText);
});

const imgs = document.querySelectorAll('img');
imgs.forEach ((item, index) => {
    console.log(item,index);
});

let i =0;
imgs.forEach(() => {
    console.log(i++);
});

imgs.forEach(() => i++);
