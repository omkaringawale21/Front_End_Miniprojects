// REDUCE METHOD-1
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
let fruitObj = {};
let fruitResult = fruitBasket.reduce((curObj, curString, index) => {
    curObj[curString] = (curObj[curString] || 0) + 1;
    // return {...curObj, [curString] : index};
    return curObj;
}, fruitObj)
console.log(fruitResult);
// Resault : {
//   banana: 2,
//   cherry:3,
//   orange:3
// }

// REDUCE METHOD-2
const fruitBasket1 = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange'];
let countString = 1;
const resultFruit = fruitBasket1.reduce((curTotal, curString) => {
    curTotal.push(curString.slice(0, countString++));
    return curTotal;
}, []);
console.log(resultFruit);

// REDUCE METHOD-3
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let dataArray = [];
let dataResult = data.reduce((dataArr, dataValues) => {
    return dataArr.concat(dataValues);
}, dataArray);
console.log(dataResult);
// Result:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// REDUCE METHOD-4
const message = ["JavaScript ", "is ", "fun."];
let msgResult = message.reduce((msg, msgValue) => {
    msg += msgValue;
    return msg;
}, "");
console.log(msgResult);
// Output: "JavaScript is fun"

// REDUCE METHOD-5
const euros = [29.76, 41.85, 46.5];
let eurosResult = euros.reduce((eurosTotal, eurosValue) => {
    eurosTotal += eurosValue*2 + "  ";
    return eurosTotal;
}, []);
console.log(eurosResult);
// [59.52, 83.7, 93]

// REDUCE METHOD-6
let student = [
  { fname: 'David', age: 23, lname: 'fishing' },
  { fname: 'Rachel', age: 25, lname: 'cooking' },
  { fname: 'Rahul', age: 22, lname: 'fishing' }
];
let studentResult = student.reduce((stud, studVal) => {
    let fullName = studVal.fname + " " + studVal.lname;
    let age = (studVal.age + 2);
    stud.push({fullName, age});
    return stud;
}, []);
console.log(studentResult);
// Expected Output => resutl: [
//   {fullName: "David fishing", age: 25},
//   {fullName: "Rachel cooking", age: 27}
//   {fullName: "Rahul fishing", age: 24}
// ]

// REDUCE METHOD-7
let studentDetails = [
  { name: 'David', age: 23, lname: 'fishing', skills: [
    {html: 3},
    {css: 2},
    {js: 5},
  ] },
  { name: 'Rachel', age: 25, lname: 'cooking', skills: [
    {html: 3},
    {css: 2},
    {js: 3},
    {php: 4}
  ] },
  { name: 'Rahul', age: 22, lname: 'fishing', skills: [
    {html: 3},
    {css: 2},
    {js: 5}
  ] }
]
let studentDetailsResult = studentDetails.reduce((studDtl, studValue) => {
    let fullName = studValue.name + " " + studValue.lname;
    let age = (studValue.age + 2);
    let ranking = studValue.skills.reduce((studIte, studVlu) => {
        let valRankCount = Object.keys(studVlu)[0];
        
        let valCount = Object.keys(studVlu)[0].length + 1;
        
        let countVal = studVlu[valRankCount];

        if (studIte.hasOwnProperty('skillRankCount')) {
            studIte.skillRankCount += countVal;
        }else {
            studIte.skillRankCount = countVal;
        }

        if (studIte.hasOwnProperty('skillCount')) {
            studIte.skillCount = valCount;
        }else {
            studIte.skillCount = valCount;
        }
        return studIte;
    }, {});
    studDtl.push({fullName, age, ranking});
    return studDtl;
}, []);
console.log(studentDetailsResult);
// resutl: [
//   {fullName: "David fishing", age: 25, ranking:{
//     skillRankCount: 8,
//     skillCount:3
//   }},
//   {fullName: "Rachel cooking", age: 27}
//   {fullName: "Rahul fishing", age: 24}
// ]

// REDUCE METHOD-8
const ethnicities = [
    {id: 1, name: 'Asian'},
    {id: 2, name: 'African'},
    {id: 3, name: 'Caucasian'},
];
const citiesResult = ethnicities.reduce((citiesTotal, citiesVal) => {
    citiesTotal[citiesVal.id] = citiesVal.name;
    return citiesTotal;
}, {});
console.log(citiesResult);

// REDUCE METHOD-9
let players = [
    { name: 'Cristiano', age: 36, nationality: "Portugize", lname: 'Ronaldo', playerSkills: [
      {goldenBoot: 5},
      {goldenFootball: 5},
      {WorldCup: 0},
      {otherCup: 1}
    ] },
    { name: 'Leonel', age: 38, nationality: "Arjentinian", lname: 'Messi', playerSkills: [
      {goldenBoot: 3},
      {goldenFootball: 3},
      {WorldCup: 1},
      {otherCup: 1}
    ] },
    { name: 'Junior', age: 33, nationality: "Brazilian", lname: 'Neymar', playerSkills: [
      {goldenBoot: 3},
      {goldenFootball: 3},
      {WorldCup: 5},
      {otherCup: 4}
    ] }
]
let count = 0;
let playerName;
let obj;
const bestPlayer = players.reduce((playerTotal, playerVal) => {
    const bestGoldenBootRanker = playerVal.playerSkills.filter((bestVal) => {
        let key = Object.keys(bestVal)[0];
        let value = bestVal[key];
        if (value == bestVal.goldenBoot) {
            if (value > count) {
                playerName = playerVal.name + " " + playerVal.lname;
                count += value;
                obj = count;
            }
        }
    });
    playerTotal.push({playerName , bestGoldenBootRanker: obj});
    return playerTotal;
}, []);
const objPlayer = {};
let bestPlayerName = "bestPlayerName";
let bestGoldenBootRanker = "bestGoldenBootRanker";
bestPlayer.forEach((ele) => {
    objPlayer[bestPlayerName] = ele.playerName;
    objPlayer[bestGoldenBootRanker] = ele.bestGoldenBootRanker;
});
console.log(objPlayer);

class Player {
    constructor(imgUrl, playerName, bootCollection) {
        this.imgUrl = imgUrl;
        this.playerName = playerName;
        this.bootCollection = bootCollection;
    }
}

let playerFullName = objPlayer.bestPlayerName;
let playerAchivement = objPlayer.bestGoldenBootRanker;

class PlayerInfo {
    playerList = [
        new Player('cr7.jpg', playerFullName, playerAchivement),
    ];
    getPlayerInfo(){
        let box = document.getElementById('box');
        let card = document.createElement('div');
        card.classList.add('card-body');
        for (const playerObj of this.playerList) {
            card.innerHTML = `
                <div>
                    <img src="${playerObj.imgUrl}" alt="player-img" />
                    <p><strong>Best Player in World : </strong>${playerObj.playerName}</p>
                    <p><strong>Achived Golden Boots : </strong>${playerObj.bootCollection}</p>
                </div>
            `;
            box.append(card);
        }
    }
}

const info = new PlayerInfo();
info.getPlayerInfo();