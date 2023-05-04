// 1.Write a JavaScript function to check whether an `input` is a string or not
let checkIsString = (input) => {
    if (Object.prototype.toString.call(input) === '[object String]') {
        return true;
    }else{
        return false;
    }
};
console.log("Is String : ", checkIsString("Omkar"));
console.log("Is String : ", checkIsString([1, 2, 3, 4, 5]));
console.log("Is String : ", checkIsString(12));

// 2.Write a JavaScript function to check whether a string is blank or not
let isBlank = function(input) { 
    if (input.length === 0) {
        return true;
    } else if (input === " ") {
        return true;
    }else{
        return false;
    }
}
console.log("Is Blank String : ", isBlank(' '));
console.log("Is Blank String : ", isBlank('abc'));

// 3.Write a JavaScript function to split a string and convert it into an array of words
let txt = "today is monday";
let isSplit = function (txt) {
    const newArray = txt.split(" ")
    console.log(newArray);
}
isSplit(txt);

// 4.Write a JavaScript function to capitalize the first letter of a string.
let firstLetter = function (txt) {
    console.log(txt.charAt(0).toUpperCase() + txt.slice(1));
}
firstLetter(txt);

// 5.Write a JavaScript function to capitalize the first letter of each word in a string.
let cpitalizeString = function (txt) {
    const arr = txt.split(" ");
    for (let i = 0; i < arr.length; i++) {
       arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let str = arr.join(" ");
    console.log(str);
}
cpitalizeString(txt);

// 6.Write a JavaScript function to find a word within a string
// eg String= "The quick brown fox"
// find "fox" word in given string
const text = "The quick brown fox";
const word = "fox";
let findWord = function (text, word) {
    console.log("Is word is present : ", text.includes(word));
}
findWord(text, word);

// 7.Write a JavaScript function check if a string ends with specified suffix
// eg String= "The quick brown fox"
// find  given string ends with "fox" or not
function endsWith(str, suffix) {
    if (((str === null) || (str === "")) || ((suffix === null) || (suffix === ""))){
        return false;
    }else{
        str = str.toString();
        suffix = suffix.toString();
    }
    return str.indexOf(suffix, str.length - suffix.length) != 0;
}
console.log("String ends with specified suffix : ", endsWith("The quick brown fox", "fox"));
console.log("String ends with specified suffix : ", endsWith("The quick brown fox", ""));


// 8.Write a JavaScript function to test whether the character at the provided (character) index is lower case
// for eg. String = "The quick brown fox"
// check String[1] is capatial or not
const text1 = prompt("Enter a String : ")
const word1 = prompt("Enter What you want : ");
let isLowerCase = function (text, word) {
    const arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i].charAt(0).toUpperCase() + arr[i].slice(1)) === word) {
            console.log("String is capatial : true");
            break;
        }else {
            console.log("String is capatial : false");
        }
    }
}
isLowerCase(text1, word1);

// 9.Find the duplicate letter from "adsjfdsfsfjsdjfhacabcsbajda" string
const string = "adsjfdsfsfjsdjfhacabcsbajda";
let findDuplicateStr = function (string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = i+1; j < string.length; j++) {
            if (string[i] === string[j]) {
                return "Repeat Char : " + string[i];
            }
        }
    }
    return -1;
}
console.log(findDuplicateStr(string));

// 10.find the first non-repeated character in a String
// eg: input: cbcbdde
// output : e
let string1 = "cbcbdde";
let findNonDuplicateStr = function (string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = i+1; j < string.length; j++) {
            if (string[i] !== string[j]) {
                return "Non-Repeat Char : " + string[j];
            }
        }
    }
    return -1;
}
console.log(findNonDuplicateStr(string1));

// 11.Check whether a string is a palindrome
function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
const value = checkPalindrome("madam");
console.log(value);

// 12.Sorting an array of strings by length
// Input: ["You", "are", "beautiful", "looking"]
// Output: [“You", "are", "looking", "beautiful"]
const input = ["You", "are", "beautiful", "looking"];
const output = input.sort((a,b) => a.length - b.length);
console.log(output);

// 13.Checking that a string contains a substring
// input1 : foo
// input2:  oo
// O/P : true
const str1 = prompt("Enter a String : ");
const substring = prompt("Check a String if it is contains a  or not substring : ");
console.log(str1.includes(substring));