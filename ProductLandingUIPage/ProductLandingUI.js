var shoes = document.querySelectorAll('.shoes');
let index = 0;

function next() {
    shoes[index].classList.remove('active');
    index = (index + 1) % shoes.length;
    shoes[index].classList.add('active');
}

function prev() {
    shoes[index].classList.remove('active');
    index = (index - 1 + shoes.length) % shoes.length;
    shoes[index].classList.add('active');
}