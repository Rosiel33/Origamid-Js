var numero = 20;

numero += 10;
console.log(numero);

numero *= 2;
console.log(numero);

numero /= 2;
console.log(numero);


// OPERADOR TERNÁRIO

// condicao ? true : false;

var idade = 19;
var podeDirigir = (idade >= 18) ? 'Pode dirigir' : 'Não pode dirigir';
console.log(podeDirigir);

// ---- EXERCÍCIOS --------
var scroll = 1000;
scroll +=500;
console.log(scroll);

var possuiCarro = true;
var possuiCasa = true;
var darCredito = (possuiCarro && possuiCasa) ? "Credito liberado":'credito não liberado';

console.log(darCredito);