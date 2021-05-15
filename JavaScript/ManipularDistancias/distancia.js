const listaAnimais = document.querySelector('.animais-lista');

const height =listaAnimais.scrollHeight;

const animaisTopo = listaAnimais.offsetTop;

const distEsqu = listaAnimais.offsetLeft;

console.log(animaisTopo);
console.log(distEsqu);
console.log(height);

// RETORNA VALORES DA PAGINS LEFT , RIGHT ... getBoundingClientRect
const rect = listaAnimais.getBoundingClientRect();

console.log(rect);

// WINDOW

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerHeight,
    window.outerWidth,
    window.pageXOffset,
)

// MATCH MEDIA () - PODE DEFINIR LARGURA COMO MEDIA QUERY
console.log('// MATCH MEDIA () - PODE DEFINIR LARGURA COMO MEDIA QUERY')
const tela = window.matchMedia('(max-width: 500px)').matches;
if(tela){
    console.log('usuario Mobile');
}else{
    console.log('usuário Desktop')
}
