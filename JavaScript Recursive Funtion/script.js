// 1. print values one by one from these array using recursion.
// ["Welcome","to", "JavaTpoint", ".com"];
let array = ["Welcome","to", "JavaTpoint", ".com"];
let printArrayEle = function (array) {
    array.forEach((printValues) => {
        console.log(printValues);
    });
    if (array.length == 1) {
        printArrayEle(array);
    }
}
printArrayEle(array);

// 2. On btn click change the bg-color of the input field and on every click count the number how many times I have clicked (Use event listener).
let changeBgCount = document.getElementById('changeBg');
let count = 0;
changeBgCount.addEventListener('click', () => {
    changeBgCount.style.background = '#09e1fd';
    alert(`No. of Clicks : ${++count}`);
});

// 3. Remove extra spaces form string which we have entered in to the input box (Use event listener).
let removeExtraSpaces = document.getElementById('removeExtraSpaces');
removeExtraSpaces.addEventListener('click', () => {
    let removeExtraSpacesField = document.getElementById('removeExtraSpacesField');
    let ele = removeExtraSpacesField.value;
    console.log("Space Remove Before : ", ele.length);
    console.log("Input Value : ",ele.trim());
    console.log("Space Remove After : ", ele.trim().length);
});

// 4. count the word length and character length which I have entered into the input (Use event listener).
let countLengthBtn = document.getElementById('countLengthBtn');
countLengthBtn.addEventListener('click', () => {
    const countLength = document.getElementById('countLength');
    console.log("Length of Input Value : ", countLength.value.length);
});
function countChars(obj) {
    console.log(obj.value.length);
}

// 5. Print 1 to 100 numbers, and Apply color "green" to number which has range from 1 to 31, "blue" from 32 to 70, and "red" from 71 to 100.
let num = function () {
    for (let i = 1; i <= 100; i++) {
        if (i >= 1 && i <= 31) {
            document.writeln(i,'<FONT COLOR="green">');
        }else if (i >= 32 && i <= 71) {
            document.writeln(i,'<FONT COLOR="blue">');
        }else {
            document.writeln(i,'<FONT COLOR="red">');
        }
    }
}
num();