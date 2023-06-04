// UI
let hamb = document.querySelector('#navi');
let nav = document.querySelector('.hide');
let klose = document.querySelector('#close');


// Pre-loader
let lod = document.querySelector('.loader');

window.addEventListener('load', function () {
    lod.style.display = 'none';
})

// The nav Close
klose.addEventListener('click', out);

function out() {
    nav.classList.add('translate-x-full')
};

//Nav button
hamb.addEventListener('click', phnav);

function phnav() {
    nav = document.querySelector('.hide');

    nav.classList.remove('translate-x-full');
};
// remove nav
nav.addEventListener('mouseleave', rem_nav)

function rem_nav() {
    nav.classList.add('translate-x-full');
}