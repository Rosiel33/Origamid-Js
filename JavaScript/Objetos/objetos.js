var pessoa={
    nome: 'rosiel',
}

var quadrado = {
    lados:4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){

        return this.lados*lado;
    },

}

quadrado.lados;
quadrado.area(4);
quadrado.perimetro(3);

console.log(quadrado.area(6))
console.log(quadrado.perimetro(3))


//  EXERCICIOS unindo os dados

var dadosPessoais={
    nome:'Rosiel ',
    sobrenome: 'Prestes',
    idade: 35,
    
    completo: function(unir){
        return this.nome + this.sobrenome;       
    }
}

console.log(dadosPessoais.completo())

// ALTERANDO PREÇO DE UM OBJETO

var carro={
    preco: 1000,
    portas: 4,
    marca : 'Audi',
}

carro.preco = 2000;


var nome = "Rosiel";

nome.length;
nome.charAt(3);
nome.replace('ro','Ro');

var peso = 55;

peso.toString(); // converte para string


// SELECIONANDO ELEMENTOS HTML


var botao = document.querySelector('.botao');