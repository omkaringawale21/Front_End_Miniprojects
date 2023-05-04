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
var swiper = new Swiper(".box-container", {
    cssMode: true,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {delay: 4500, disableOnInteraction: false},
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination", clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});
lightGallery(document.getElementById('lightgallery'));
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    document.querySelector('.to-top').classList.add('active');
  }else{
    document.querySelector('.to-top').classList.remove('active');
  }
});