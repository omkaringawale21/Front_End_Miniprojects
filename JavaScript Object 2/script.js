// 1.JavaScript Getter (The get Keyword) & Setter (The set Keyword) & Functions
let mobileObj = {
    mobileCompanay: "Samsung",
    mobileName: "A51",
    mobileRam: "8GB",
    mobileInternlStorage: "128GB",
    mobileBattery: "",
    phoneNum1: "1234567890",
    phoneNum2: "1112223333",
    set mobileBatteryInfo(capacity) {
        this.mobileBattery = capacity;
    },
    get mobileInfo() {
        return this.mobileCompanay + " " + this.mobileName;
    },
    mobilePhoneNum: function() {
        return this.phoneNum1 + " " + this.phoneNum2;
    }
};
mobileObj.mobileBattery = "4000MAH";
console.log("Mobile company and model : ", mobileObj.mobileInfo);
console.log("Mobile Battery Capacity : ", mobileObj.mobileBattery);
console.log("Mobile Numbers : ", mobileObj.mobilePhoneNum());

// 2.JavaScript Object Constructors & Prototype
function Player(fname, lname, age, awards) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.awards = awards;
    this.changeLastName = function (name) {
        this.fname = name;
    }
}
Player.prototype.followers = "3.4B";

const player1 = new Player("Cristiano", "Ronaldo", 35, "5 Golden Boots");
player1.nationality = "Portugiz";
player1.fullNamePlay1 = function () {
    return this.fname + " " + this.lname;
}
player1.changeLastName("Junior");
console.log("Nationality of player1 : ", player1.nationality);
console.log("FullName of player1 : ", player1.fullNamePlay1());
console.log("Followers of Player1 : ", player1.followers);

const player2 = new Player("Lionel", "Messi", 38, "3 Golden Boots");
player2.nationality = "Argentinian";
player2.fullNamePlay2 = function () {
    return this.fname + " " + this.lname;
}
player2.changeLastName("Kaka");
console.log("Nationality of player2 : ", player2.nationality);
console.log("FullName of player2 : ", player2.fullNamePlay2());
console.log("Followers of Player2 : ", player2.followers);

// 3.JavaScript Sets
const letters = new Set(["a","b",2108]);
letters.add("d");

let text = "";
letters.forEach ((value) => {
  text += value + " ";
});
console.log("Print letters : ", text);

let txt = "";
for (const x of letters.values()) {
  txt += x + " ";
}
console.log("Values of letters : ", txt);

let word = "";
for (const x of letters.entries()) {
    word += x + "  ";
}
console.log("Key & Value Pair : ", word);

// 4.JavaScript Maps
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
fruits.set("mango", 400);

let text1 = "";
fruits.forEach (function(value, key) {
  text1 += key + ' = ' + value + "  ";
});
console.log(text1);

let txt1 = "";
for (const x of fruits.values()) {
    txt1 += x + "  ";
}
console.log(txt1);

let word1 = "";
for (const x of fruits.entries()) {
    word1 += x + "  ";
}
console.log(word1);

// 5.Object Reference (Changing a Property Value)
const person = {
    firstName: "Omkar",
    lastName: "Ingawale",
    language: "English"
};
Object.defineProperty(person, "birthYear", {value: "Date of Birth : " + 1997});
Object.defineProperty(person, "language", {enumerable: false});
console.log(Object.values(person));
console.log(person.birthYear);
let text2 = "";
for (const x in person) {
    text2 += person[x] + " ";
}
console.log(text2);

