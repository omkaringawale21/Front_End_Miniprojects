let searchBtn = document.getElementById("search-btn");
let shoppingBtn = document.getElementById("shopping-btn");
let menuBtn = document.getElementById("menu-btn");
let mainSelector = document.querySelector(".main-item-container");
let searchInput = document.querySelector(".search-input");
let cartItems = document.querySelector(".cart-container");
menuBtn.onclick = () => {
    mainSelector.classList.toggle("active");
    searchInput.classList.remove("active");
    cartItems.classList.remove("active");
};
searchBtn.onclick = () => {
    searchInput.classList.toggle("active");
    mainSelector.classList.remove("active");
    cartItems.classList.remove("active");
};
shoppingBtn.onclick = () => {
    cartItems.classList.toggle("active");
    mainSelector.classList.remove("active");
    searchInput.classList.remove("active");
};