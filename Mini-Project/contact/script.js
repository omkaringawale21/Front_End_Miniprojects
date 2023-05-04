let down = document.querySelector('#down-btn');
let box = document.querySelector('.drop-box');
let cartUpDown = document.querySelector('.fa-caret-down');
down.onclick = () => {
    box.classList.toggle('active');
    cartUpDown.classList.toggle('fa-caret-up');
    cartUpDown.classList.toggle('fa-caret-down');
};
let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-bar');
menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');
};