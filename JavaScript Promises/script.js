// 1.Traffic Signal Real Time Senario
function trafficSignalRed(color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (color == "red") {
                resolve("Color is Red", color);
            }else {
                reject("Please a connect a light source");
            }
        }, 4000);
    });
}
function trafficSignalYellow(color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (color == "yellow") {
                resolve("Color is Yellow", color);
            }else {
                reject("Please a connect a light source");
            }
        }, 4000);
    });
}
function trafficSignalGreen(color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (color == "green") {
                resolve("Color is Green", color);
            }else {
                reject("Please a connect a light source");
            }
        }, 5000);
    });
}
// trafficSignalRed("red").then((isRed) => {
//     console.log(isRed);
//     return trafficSignalYellow("yellow");
// })
// .then((isYellow) => {
//     console.log(isYellow);
//     return trafficSignalGreen("green");
// })
// .then((isGreen) => {
//     console.log(isGreen);
// })
// .catch((isError) => {
//     console.log(isError);
// });
async function showSignal() {
    let light1 = await trafficSignalRed("red");
    console.log(light1);
    let light2 = await trafficSignalYellow("yellow");
    console.log(light2);
    let light3 = await trafficSignalGreen("green");
    console.log(light3);
}
showSignal();

// 2.find given number is even or odd using promise
// The promise must resolve itself 2 seconds after the call to function for even number and 1 seconds after the call to function for odd number an reject if we pass string to the function
function isEven(num) {
    return new Promise((resolve, reject) => {
        if (num%2 === 0) {
            resolve("Even==>" + num);
        }else {
            reject("This is a Odd Number & Please Enter a Number not a String");
        }
    })
}
let numForEvenOdd = parseFloat(prompt("Enter a Number : "));
isEven(numForEvenOdd).then((num) => {
    console.log(num);
})
.catch((Error) => {
    console.log(Error);
})

// 3.Write a function using promise must resolve itself 2 seconds after the call to function and must provide hello world in the data
function printData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data === "Hello World") {
                resolve("Hello World");
            }else {
                reject("Enter a Proper Data");
            }
        }, 4000);
    })
}
let dataForPrint = prompt("Ente a Hello World");
printData(dataForPrint).then((data) => {
    console.log(data);
})
.catch((dataError) => {
    console.log(dataError);
})