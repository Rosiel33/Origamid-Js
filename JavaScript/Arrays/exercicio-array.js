var vitorias = [1959,1962,1970,1994,2002];

vitorias.forEach(function(vitorias){
    console.log(`O Brasil ganhou a copa de: ${vitorias}`)
})

//  ----------- OU -----------

for( var ano = 0; ano < vitorias.length; ano++){

    console.log('campeão em:' + vitorias[ano]);
}

// ---------- USANDO BREACK -----------

console.log('------- USANDO BREACK --------')

var frutas = ['banana','abacaxi','uva'];

for( var fruta = 0; fruta < frutas.length; fruta++){
    console.log(frutas[fruta]);
    if(frutas[fruta] === 'abacaxi'){
        break
    }
}

var ultimaFruta = frutas[frutas.length -1]


// OPERADORES DE ATRIBUIÇÃO 