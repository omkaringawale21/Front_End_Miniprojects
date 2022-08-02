let card = document.querySelector('.card');
let cardtoggle = document.querySelector('.toggle');

cardtoggle.onclick = function (e) {
    card.classList.toggle('active');
}