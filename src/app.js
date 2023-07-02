// UI
let hamb = document.querySelector('#navi');
let nav = document.querySelector('.hide');
let klose = document.querySelector('#close');
let form = document.querySelector('.form');
const message = document.querySelector('#message');
let name = document.querySelector('#name'),
    mail = document.querySelector('#mail'),
    phone = document.querySelector('#phone');


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

// form.addEventListener('submit', ()=> {
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "favourpeters1@gmail.com",
//         Password : "",
//         To : 'favourpeters1@gmail.com',
//         From : mail.value,
//         Subject : "New message from my Site",
//         Body : `Name: ${name.value}
//         Email: ${mail.value}
//         Phone No: ${phone.value}
//         Message: ${message.value}`
//     }).then(
//       message => alert(message)
//     );
// })