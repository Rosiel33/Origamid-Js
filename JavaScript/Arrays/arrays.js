var games = ['switch', 'pc', 'xbox', 'ps3'];

games.pop(); // Remove o último item e retorna ele
games.push('ps2') // Add ao final do Array
games.length; // conta os arrays


//      FOR 
console.log('//    FOR  ')

for (let n = 2; n <= 10; n++) {
    console.log(n);
}

//    while   
console.log('//    while  ')
var n = 0;

while (n < 10) {
    console.log(n)
    n = n + 5;
}


// MOSTRAR ITENS DO ARRAY -- FOR LOOP

console.log('MOSTRAR ITENS DO ARRAY   -- FOR LOOP')

var games = ['switch', 'pc', 'xbox', 'ps3'];

for (var item = 0; item < 4; item++) {
    console.log(games[item]);
    if (games[item] === 'xbox') {
        break;
    }
}


// FOREACH

console.log('---------- Foreach --------------')

var frutas = ['maçã', 'banana','laranja']
frutas.forEach(
    function(produtos, index , array){
        console.log(produtos, index, array)
    }
)