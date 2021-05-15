function isTruthy(dado) {
    return !!dado;
}
var confereValor = isTruthy('oi');
console.log(confereValor);

// CALCULO Perímetro QUADRADO

function perimetro(lados) {
    return lados * 4;
}

// FUNÇÃO IMPRIMIR NOME

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}



function vereficar(numero) {
    var modulo = numero % 2;
    if (modulo === 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

//  TIPO DE DADO

function tipoDado(dado) {
    return (typeof dado)
}

//  Função addEventlistener

addEventListener('scroll', function () {
    console.log('Rosiel Prestes')
})

addEventListener('click', function () {
    console.log('Rosiel Prestes')
})

// PAISES VISITADOS

var totalPaises = 193;

function faltaVisitar(paisesVisitados) {

    return ` Já visitei ${totalPaises - paisesVisitados} países para visitar`
}
function jaVisitei(paiseVisitados) {
    return `Ainda faltam visitar ${totalPaises - paiseVisitados} países`;
}
faltaVisitar();
jaVisitei();