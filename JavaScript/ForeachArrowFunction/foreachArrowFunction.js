// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item, index,array){
//     console.log(item,index, array)
// })

// TRANSFORMANDO ARRAY-LIKE PARA ARRAY

const classeMenu = document.getElementsByClassName('menu');

const novaClasseMenu = Array.from(classeMenu);

novaClasseMenu.forEach(function(item){
    console.log(item);
});

// ARROW FUNCTION ---- NOVA SINTAXE JS-ES6

console.log('ARROW FUNCTION ---- NOVA SINTAXE JS-ES6');

novaClasseMenu.forEach((item) => {
    console.log(item);
});
// SEGUNDA OPÇÃO SEM AS CHAVES - EM ÚNICA LINHA
novaClasseMenu.forEach((item) =>    console.log(item));