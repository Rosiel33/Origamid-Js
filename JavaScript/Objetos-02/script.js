function Carro(marcaAtribuida, precoAtribuido){
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}
const honda = new Carro('honda', 4000);
const fiat = new Carro('fiat', 3000);

function Carro2(marca, precoInicial){
   const taxa = 1.2;
   const precoFinal = precoInicial * taxa;

   this.marca= marca;
   this.preco=precoFinal;
}

const veiculo = new Carro2('Monza', 3000)