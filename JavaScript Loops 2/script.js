// 1.Write a JS code to print numbers from 1 to 10
let oneToTen = function (start, end) {
    while (start <= end) {
        console.log(start);
        start++;
    }
}
oneToTen(1, 10);

// 2.Write a JS code to print Even numbers
let findEven = function (start, end) {
    while (start <= end) {
        if (start % 2 == 0) {
            const element = start;
            console.log("Even numbers : ", element);
        }
        start++;
    }
}
findEven(1, 50);

// 3.Find factors of any given number
function findFactors(num) {
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            console.log(i + " ");
        }
    }
}
findFactors(33);

// 4.Sort the array
let array = [78, 34, 1, 3, 90, 34, -1, 6, 55, 20, -65];
for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        let temp;
        if (array[i] > array[j]) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    console.log(array[i]);
}

// 5.Reverse of that number
let num = 123456;
let digit, sum = 0;
while(num > 0) {
    digit = num % 10;
    sum = sum * 10 + digit;
    num = parseInt(num / 10);
};
console.log("Reverse Number : " + sum);;

// 6.Find prime numbers
const number = 23;
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// 7.For in loop
const person = {fname:"Omkar", lname:"Ingawale", age:25};
let text = "";
for (let x in person) {
  text += person[x] + " ";
}
console.log(text);

// 8.For of loop (values) creates a new array
const emp = {empId:001, empDomain:"Front-End", empAddress:"Pune"};
const employee = Object.values(emp);
let txt = "";
for (let x of employee) {
  txt += x + " ";
}
console.log(txt);

// 9.For of loop (keys) creates a new array
const employ = Object.keys(emp);
let tx = "";
for (let x of employ) {
  tx += x + " ";
}
console.log(tx);

// 10.Find duplicate value in an array
let arr = [13, 23, 12, 45, 22, 48, 13, -1, 45, 66, 100, -65];
let findDuplicateNum = (arr) => {
    let a = 0;
    let b = a + 1;
    while (arr.length == a){
        if (arr[a] == arr[b]) {
            console.log("Duplicate Number in an Array : " + arr[b]);
            b++;
            // break;
        } else if (b == arr.length - 1) {
            a++;
            b = a + 1;
        }else {
            b++;
        }
    }
};
findDuplicateNum(arr);

// 11.Find target index in an array Ref:Above array
let findNumIndex = (target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            console.log("Index of that number : ", i);
        }
    }
};
findNumIndex(parseInt(prompt("Enter a Number : ")));