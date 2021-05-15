// usando  'use strict'

// 'use strict' // evita usar variaveis nao definidas
function mostrarCarro() {
    carro = 'Gol';
    console.log(carro);
}

mostrarCarro(); //Gol 
// console.log(carro); //carro is not defined(var dentro da função)


var i = 50;

for (let i = 0; i < 10; i++) {
    console.log(`Número ${i}`);
}

console.log(i * 10);

const semana = 'sexta';
// semana = 'quarta'; // CONST NAO PODE SER REATRIBUIDO O VALOR

// objetos

const data = {
    ano: 2012,
    mes: 'janeiro',
}

data.ano = 2009;
data.mes = 'abril';



// EXERCICIOS
{
    var cor = 'preto';
    const marca = 'fiat';
    let portas = 4;
    console.log(cor,marca,portas);
}
// NÃO VAI EXECUTAR POIS CONST E LET ESTÃO DENTRO do escopo DO BLOCO.
// console.log(cor,marca,portas);

// --------------- EXERCICIO 02 ----------------------------

console.log('EXERCICIO 02');

const dois = 2;
function somarDois(x){
    return x + dois;
}
function dividirDois(x){
    return x / 2;
}
somarDois(4);
dividirDois(6);