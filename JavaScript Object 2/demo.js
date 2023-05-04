var taskObj = [];

function validateForm() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const empPriority = document.getElementById('empPriority').value;
    let gender = "";
    let ele = document.getElementsByName('gender');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            gender = ele[i].value;
    }
    console.log("Candidate Values : ", fname , lname, empPriority, gender);

    const taskData = {
        f_name: fname,
        l_name: lname,
        emp_priority: empPriority,
        gender_MF: gender
    };
    console.log(taskData);

    taskObj.push(taskData);
    console.log(taskObj);

    const data = JSON.stringify(taskData);
    console.log(data);

    reseatForm();
}

function reseatForm() {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('empPriority').value = '';
    let ele = document.getElementsByName('gender');
    ele.forEach((e) => e.checked = false);
}