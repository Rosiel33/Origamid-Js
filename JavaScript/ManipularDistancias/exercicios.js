// console.log('Vereficar distancia da 1ª img ate o topo da pg')
// const topPagina = document.querySelector('img');
// const dist = topPagina.offsetTop;
// console.log(dist);


// // soma largura de todas img

// console.log('soma largura de todas img')

// function somaImagens() {

//     const imgs = document.querySelectorAll('img');
//     let soma = 0;
//     imgs.forEach((imagem) => {
//         soma += imagem.offsetWidth;
//     });
//     console.log(soma);
// }


// window.onload = function () {
//     somaImagens();
// }

// VEREFICAR LINKS POUSSUI 48PX/48PX recomend. pelo google

const links = document.querySelectorAll('a');


links.forEach((link) => {

    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;

    if (linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, 'dentro do padrão')
    } else {
        console.log(link, 'Fora do padrão')
    }
})

// MENU MOBILE


const browserSmall = window.matchMedia('(max-width: 520px)').matches;

if (browserSmall) {
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile');
}



