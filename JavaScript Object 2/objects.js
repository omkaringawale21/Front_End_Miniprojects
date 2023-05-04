// Task - 1
const players = [
    {
        fname : "Cristiano",
        lname : "Ronaldo",
        followers : "3.4B"
    },
    {
        fname : "Liolel",
        lname : "Messsi",
        followers : "2.4B"
    },
    {
        fname : "Sunil",
        lname : "Chettri",
        followers : "2.9B"
    }
];
const newPlayer = {
    fname : "Junior",
    lname:  "Neymar",
    followers : "1.5B"
};
players.unshift(newPlayer);
console.log(players);

let footballPlayers = "";
for (const x of players) {
    footballPlayers += x.fname + " " + x.lname + " " + x.followers + "\n";
}
console.log(footballPlayers);

const playerJson = JSON.stringify(players);
console.log(playerJson);

const playerParse = JSON.parse(playerJson);
console.log(playerParse);

for (const x in playerParse) {
    const sportsman = playerParse[x].fname + " " + playerParse[x].lname + " " + playerParse[x].followers;
    console.log(sportsman);
}

// Task - 2
let company = {
    "name": "Josh",
    "address": "Pashan ,Pune",
    "employees": [
      {
        "name": "Shyam", "email": "shyamjaiswal@gmail.com", "id": 1,
        "dob": { "day": 5, "month": "Nov", "year": 1998 },
        "skills": ["Java", "Angular"],
        "location": {
          "street": "9156 dogwood ave",
          "city": "devonport",
          "state": "australian capital territory",
          "postcode": 7374
        }
      },
      {
        "name": "Bob", "email": "bob32@gmail.com", "id": 2,
        "dob": { "day": 5, "month": "Nov", "year": 1998 },
        "skills": ["Java", "Angular", "React"],
        "location": {
          "street": "9156 dogwood ave",
          "city": "devonport",
          "state": "australian capital territory",
          "postcode": 7374
        }
      },
      {
        "name": "Jai", "email": "jai87@gmail.com", "id": 3,
        "dob": { "day": 5, "month": "Nov", "year": 1998 },
        "skills": ["Java", "PHP"],
        "location": {
          "street": "9156 dogwood ave",
          "city": "devonport",
          "state": "australian capital territory",
          "postcode": 7374
        }
      }
    ]
};

function empDetail(empId) {
  const companyJson = JSON.stringify(company);
  console.log(companyJson);

  const companyParse = JSON.parse(companyJson);
  console.log(companyParse);

  this.empId = empId;

  let filterArr = companyParse.employees.filter((emp) => emp.id == empId);
  console.log("Filter Array : ", filterArr);
  filterArr.map(employ => {
    let employee = "<div class='card text-center my-3 py-3'> ";
    employee += "<div class='card-body' >";
    employee += "<h4>Employee Details</h4>";
    employee += "<h6> Employee No. : " + employ.id + "</h6>";
    employee += "<h6> Employee Name : " + employ.name + "</h6>";
    employee += "<h6> Employee Email : " + employ.email + "</h6>";
    employee += "<h6> Employee Date Of Birth : " 
                    + employ.dob.day + " "
                    + employ.dob.month + " "
                    + employ.dob.year
                "</h6>";
    employee += "<h6> Employee skills : " + employ.skills + "</h6>";
    employee += "<h6> Employee Address : " 
                    + employ.location.street + ", "
                    + employ.location.city + ", "
                    + employ.location.state + ", "
                    + employ.location.postcode + "."
                "</h6>";
    employee += "</div>"
    employee += "</div>"
    document.getElementById('empDetail').innerHTML = employee;
  });

  // for (const i in companyParse.employees) {
  //   if (companyParse.employees[i].id == count) {
  //     let employee = "<div class='card text-center my-3 py-3'>";
  //     employee += "<h4>Employee Details</h4>";
  //     employee += "<h6> Employee No. : " + companyParse.employees[i].id + "</h6>";
  //     employee += "<h6> Employee Name : " + companyParse.employees[i].name + "</h6>";
  //     employee += "<h6> Employee Email : " + companyParse.employees[i].email + "</h6>";
  //     employee += "<h6> Employee Date Of Birth : " 
  //                     + companyParse.employees[i].dob.day + " "
  //                     + companyParse.employees[i].dob.month + " "
  //                     + companyParse.employees[i].dob.year
  //                 "</h6>";
  //     employee += "<h6> Employee skills : " + companyParse.employees[i].skills + "</h6>";
  //     employee += "<h6> Employee Address : " 
  //                     + companyParse.employees[i].location.street + ", "
  //                     + companyParse.employees[i].location.city + ", "
  //                     + companyParse.employees[i].location.state + ", "
  //                     + companyParse.employees[i].location.postcode + "."
  //                 "</h6>";
  //     employee += "</div>"
  //     document.getElementById('empDetail').innerHTML = employee;
  //   }
  // }
}

function displayTable() {
    const companyJson = JSON.stringify(company);
    console.log(companyJson);

    const companyParse = JSON.parse(companyJson);
    console.log(companyParse);

    const companyName = document.getElementById('companyName');
    companyName.innerHTML = "Company Name : " + companyParse.name;
    const companyAddress = document.getElementById('companyAddress');
    companyAddress.innerHTML = "Company Address : " + companyParse.address;

    let htmlTable = "<table>";
    htmlTable += "<tr>";
    htmlTable += "<th> Employee's No. </th>";
    htmlTable += "<th> Employee's Name </th>";
    htmlTable += "<th> Employee's Email </th>";
    htmlTable += "<th> Employee's Date of Birth </th>";
    htmlTable += "<th> Employee's Skill's </th>";
    htmlTable += "<th> Employee's Address </th>";
    htmlTable += "<th> Employee's Details </th>";
    htmlTable += "</tr>";
    let count = 0;
    for (const i in companyParse.employees) {
        htmlTable += "<tr>";
        htmlTable += "<td>" + ++count + "</td>";
        htmlTable += "<td>" + companyParse.employees[i].name + "</td>";
        htmlTable += "<td>" + companyParse.employees[i].email + "</td>";
        htmlTable += "<td>" + companyParse.employees[i].dob.day + " " +
                            companyParse.employees[i].dob.month + " " +
                            companyParse.employees[i].dob.year
                    "</td>";
        htmlTable += "<td>" + companyParse.employees[i].skills + "</td>";
        htmlTable += "<td>" + companyParse.employees[i].location.street + ", " +
                            companyParse.employees[i].location.city + ", " +
                            companyParse.employees[i].location.state + ", " +
                            companyParse.employees[i].location.postcode
                    "</td>";
        htmlTable += "<td> <a onclick='empDetail(" + count + ")' style='cursor: pointer;' >Employee Detail</a> </td>";
        htmlTable += "</tr>";
    }
    htmlTable += "</table>";
    document.getElementById("box").innerHTML = htmlTable;
}

// Task - 3 Nested this keyword example
var activeEffect = "fade";
const std_obj = {
    options : { rows: 0, cols: 0 },
    activeEffect : "fade",
    displayMe : function() {
        console.log(this.activeEffect == "fade");
        const doSomeEffects = function() {
            console.log(this.activeEffect == "fade");
        }
        doSomeEffects();
    }
};
std_obj.displayMe();