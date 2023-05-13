// UI
let hamb;
let nav;
hamb = document.querySelector('#navi');
let klose = document.querySelector('#close');

let lod = document.querySelector('.loader');

window.addEventListener('load', function () {
    lod.style.display = 'none';
})

klose.addEventListener('click', out);

function out() {
    nav.classList.add('translate-x-full')
};


hamb.addEventListener('click', phnav);

function phnav() {
    nav = document.querySelector('.hide');

    nav.classList.remove('translate-x-full');
};