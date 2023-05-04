// UI
let hamb;
let nav;
hamb = document.querySelector('#navi');
let klose = document.querySelector('#close');
// let loader;
// loader = document.getElementById('loader');

// loader.addEventListener("click", function () {
//     pre_loader.style.display = "inline-block";

//     console.log(pre_loader);
// })

// console.log(pre_loader);
klose.addEventListener('click', out)

function out() {
    nav.classList.add('translate-x-full')
}


hamb.addEventListener('click', phnav);

function phnav() {
    nav = document.querySelector('.hide');

    nav.classList.remove('translate-x-full');
}