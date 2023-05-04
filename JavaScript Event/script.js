// 1. pageload (onload) event apply (bodyload show alert)
function bodyLoadingFun(){
    alert("Page is loaded");
}

// 2. create two button (one button apply single click and another button dblclick event)
function singleClick() {
    document.body.style.backgroundColor = "orange";
}
function doubleClick() {
    // document.body.style.backgroundColor = "orange";
    document.body.style.backgroundColor = "white";
}

// 3.paragraph copy event apply
function copyFun() {
    alert("Text copied!")
}

// 4.crete dragable button (it drag whenever body)
let addDragBtn = document.getElementById('addDragBtn');
addDragBtn.onmousedown = function(event) {
    let shiftX = event.clientX - addDragBtn.getBoundingClientRect().left;
    let shiftY = event.clientY - addDragBtn.getBoundingClientRect().top;
    addDragBtn.style.position = 'absolute';
    document.body.append(addDragBtn);
    // moves the dragBtn at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
        addDragBtn.style.left = pageX - shiftX + 'px';
        addDragBtn.style.top = pageY - shiftY + 'px';
    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    // move the dragBtn on mousemove
    document.addEventListener('mousemove', onMouseMove);
    // drop the dragBtn, remove unneeded handlers
    addDragBtn.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
    };
};
addDragBtn.ondragstart = function() {
    return false;
};

// 5.create addition,sub.multi,divide button and apply  mathematical functionalty
document.getElementById('btn').onclick = () => {
    let ip1 = Number(document.getElementById('ip1').value);
    let ip2 = Number(document.getElementById('ip2').value);
    let ip3 = document.getElementById('ip3');
    let plus = document.getElementById('plus');
    let minus = document.getElementById('minus');
    let into = document.getElementById('into');
    let divide = document.getElementById('divide');
    plus.onclick = () => {
        document.getElementById('ip3').value = document.getElementById('plus').value;
    };
    minus.onclick = () => {
        document.getElementById('ip3').value = document.getElementById('minus').value;
    };
    into.onclick = () => {
        document.getElementById('ip3').value = document.getElementById('into').value;
    };
    divide.onclick = () => {
        document.getElementById('ip3').value = document.getElementById('divide').value;
    };
    if (ip3.value == "+") {
        const add = ip1 + ip2;
        document.getElementById('result').value = add;
    }
    else if (ip3.value == "-") {
        const sub = ip1 - ip2;
        document.getElementById('result').value = sub;
    }
    else if (ip3.value == "*") {
        const mul = ip1 * ip2;
        document.getElementById('result').value = mul;
    }
    else if (ip3.value == "/") {
        const divi = ip1 / ip2;
        document.getElementById('result').value = divi;
    }
};

// 6.create mouse effect on two div
function enterMouseOutter() {
    alert("Mouse Entered in Outter Div!");
}
function leaveMouseOutter() {
    alert("Mouse Leaved from Outter Div!");
}
function enterMouseInner() {
    alert("Mouse Entered in Inner Div!");
}
function leaveMouseInner() {
    alert("Mouse Leaved from Inner Div!");
}

// 7.create dragable div (one or more div dragable)
function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
}
function dragEnter(event) {
    if ( event.target.className == "droptarget" ) {
        document.getElementById("demo").innerHTML = "Entered the dropzone";
        event.target.style.border = "3px dotted red";
    }
}
function dragLeave(event) {
    if ( event.target.className == "droptarget" ) {
        document.getElementById("demo").innerHTML = "Left the dropzone";
        event.target.style.border = "1px solid #aaaaaa";
    }
}
function allowDrop(event) {
    event.preventDefault();
}
function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}