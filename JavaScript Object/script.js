// 1.Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Go to the editor
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };
const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
console.log("object key before : ", student.rollno);
delete student.rollno;
console.log("object key after : ", student.rollno);

// 2.Write a JavaScript function to convert an object into a list of '[key, value]' pairs.
function pairs() {
    const obj = {
        mobileName: "A51",
        mobileRam: "8GB",
        mobileInternlStorage: "128GB"
    };
    let result = Object.entries(obj);
    console.log(result);
}
pairs();

// 3.Write a JavaScript function to retrieve all the values of an object's properties.
function getValues() {
    const exampleObj = {
      language: "JavaScript",
      designedby: "Omkar Ingawale",
      year: "2022"
    };
    let valuesArray = Object.values(exampleObj);
    console.log(valuesArray);
}
getValues();

// 4.Write a JavaScript program to list the properties of a JavaScript object.
const object = {
    name: "Omkar",
    5: 25
};
object.address = "Pune";
object['mob'] = 1234567890;
console.log(object[5]);
let keys = Object.keys(object)
console.log(keys);

// 6.Print white color of car
const arrObj = {
    name: "Omkar",
    car: {
        carName: "xyz",
        color: ["yellow", "white"]
    }
};
console.log(arrObj.car.color[1]);

// 7.Print Price  of bullets
const bullet = [{
    model: "1980",
    price: "10K"
},
{
    model: "1983",
    price: "12K"
},
{
    model: "1986",
    price: "12.8K"
},
{
    model: "1989",
    price: "13.1K"
},
{
    model: "1990",
    price: "13.7K"
},
{
    model: "1997",
    price: "14.8K"
},
{
    model: "2000",
    price: "15K"
},
{
    model: "2002",
    price: "16K"
},
{
    model: "2003",
    price: "16.3K"
},
{
    model: "2005",
    price: "17K"
}]
for (const x of bullet) {
    console.log("Price of Bullets : ", x.price);
}