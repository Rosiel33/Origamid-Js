const adcionar = document.querySelectorAll('.menu a');

adcionar.forEach((item) => {
    item.classList.add('ativo')
})

adcionar.forEach((item) => {
    item.classList.remove('ativo')
})

const possuiAtb = document.querySelectorAll('img');
possuiAtb.forEach((img) => {
    const atbts = img.hasAttribute('alt')
    console.log(atbts);
});

const links = document.querySelector('[href ^="https"]');
links.setAttribute('href' , 'www.facebook.com');