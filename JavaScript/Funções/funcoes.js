// function areaQuadrado(lado){
//     return lado * lado;
// }

// console.log(areaQuadrado(4));
// areaQuadrado(5);
// areaQuadrado(2);

// function pi(){
//     return 3.14;
// }
// console.log (pi());

// addEventListener('click',function(){
//     console.log('clicou')
// })
// addEventListener('click',function(){
//     console.log('oi')
// })


// function imc(peso,altura){
//     const imc = peso/(altura ** 2);
//     console.log(imc);
// }

// imc(3,4);

function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Aceito apenas Números'
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
    console.log ('oi')
}
console.log(terceiraIdade(66))


var profissao = 'TI';

function dados(){
    var nome = 'Rosiel';
    var idade = 35;
    function outrosDados(){
        var end =  "Indaial - SC";
        return `${nome}, ${idade},${end}`;
    }
    return outrosDados();
}

console.log(dados());