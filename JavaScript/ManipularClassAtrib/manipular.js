// MANIPULANDO UNICO ITEM


const menuSite = document.querySelector('.menu');
console.log(menuSite)
menuSite.classList.add('ativo' , 'teste')
menuSite.classList.remove('teste')
menuSite.classList.remove('ativo')
menuSite.classList.toggle('ativo')
menuSite.classList.contains('ativo')
menuSite.classList.toggle('ativo')
menuSite.classList.toggle('ativo') //uma vez que executa add outra remove

if(menuSite.classList.contains('ativo')){
    menuSite.classList.toggle('possui')
}else{
    menuSite.classList.toggle('nao possiu')
}

// ATRIBUTOS GET E SET

const animais = document.querySelector('.animais');
console.log(animais.attributes)

console.log('Selecionando imagens')
const imagens = document.querySelector('img');

const altImg = imagens.getAttribute('alt');

imagens.setAttribute('alt' , ('novaImgRaposa'));
// add atributo alt na imagem

imagens.setAttribute('alt', 'e uma raposinha')

console.log(imagens)

console.log(`novo valor${imagens.getAttribute('alt')}`)


// VEREFICA SE POSSUI ATRIBUTOS
console.log('VEREFICA SE POSSUI ATRIBUTOS');
const possiuAlt = imagens.hasAttribute('alt');
console.log(possiuAlt);


