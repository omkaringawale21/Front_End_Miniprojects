// 1.Write a JS code to print numbers from 1 to 10
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

// 2.Write a JS code to print Even numbers in given array [13,23,12,45,22,48,66,100]
let array = [13, 23, 12, 45, 22, 48, 66, 100];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        const element = array[i];
        console.log("Even numbers in given array : ", element);
    }
}

// 3.Write a JS code to print a pattern using for loop
let ip = "";
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        ip += "*";
    }
    ip += "\n";
}
console.log(ip);

// 4.Write a JS code to find duplicate values in a given array [13,23,12,45,22,13,48,66,100]
let colln = [13, 23, 12, 45, 22, 12, 48, 23, 66, 100];
for (let i = 0; i < colln.length; i++) {
    for (let j = i+1; j < colln.length; j++) {
        if (colln[i] == colln[j]) {
            const ele = colln[j];
            console.log("Duplicate Value : ", ele);
        }
    }
}

// 5.Write a JS code to find the largest and smallest number in an array Ref:Above Array
let largest = colln[0];
let smallest = colln[0];
for (let i = 1; i < colln.length; i++) {
    if (colln[i] > largest) {
        largest = colln[i];
    } else if (colln[i] < smallest) {
        smallest = colln[i];
    }
}
console.log("Largest Value in an array : ", largest);
console.log("Smallest Value in an array : ", smallest);

// 6.Write a JS code to find the no of digits in a number
let no = 4678934;
let temp = 1;
while( ( no /= 10 ) >= 1 ){ 
    // no = no / 10
    temp++;
}
console.log("No of digits : ", temp);

// 7.Write a JS code to delete all duplicate element
for (let i = 0; i < colln.length; i++) {
    for (let j = i+1; j < colln.length; j++) {
        if (colln[i] == colln[j]) {
            console.log("Duplicate Numbers : ", colln.splice(j, 1));
        }
    }
}
console.log(colln);

// 8.Calculate the factorial of the number
const number = parseInt(prompt('Enter a positive integer: '));
// if (number > 0) {
    // let fact = 1;
    // for (let i = 1; i <= number; i++) {
    //     fact *= i;
    // }
    // console.log(`The factorial of ${number} is ${fact}.`);
// }
if (number > 0) {
    let fact = 1;
    let i = 1;
    while (i <= number) {
        fact *= i;
        i++;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}

// 9.Take the DOB from user and find age
function calculateAge(dob) {
    let year = new Date().getFullYear();
    return year -= new Date(dob);
}
console.log("Age is : ", calculateAge(new Date(1998)));

// 10.Write a JS code to print a pattern using for loop
let patt = "";
for (let i = 5; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
        patt += "*";
    }
    patt += "\n";
}
console.log(patt);