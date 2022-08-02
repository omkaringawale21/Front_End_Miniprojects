let list = document.querySelectorAll('li');

for (let i = 0; i < list.length; i++) {
    list[i].onmouseover = function () {
        let j = 0;
        while (j < list.length) {
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }
}

list.forEach(elements => {
    elements.addEventListener('onmouseover', function(e){
        let bg = document.querySelector("body");
        let colorChangeBG = e.target.getAttribute("data-color");
        bg.style.backgroundColor = colorChangeBG;
    });
});