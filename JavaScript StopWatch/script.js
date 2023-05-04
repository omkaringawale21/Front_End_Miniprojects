let countHrs = 0;
let countMin = 0;
let countSec = 0;
let countMiliSec = 0;
let timer = false;
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let resetBtn = document.getElementById('resetBtn');

function stopWatch() {
    if (timer == true) {
        countMiliSec = countMiliSec + 1;
        if (countMiliSec == 100) {
            countSec = countSec + 1;
            countMiliSec = 0;
        }
        if (countSec == 60) {
            countMin = countMin + 1;
            countSec = 0;
        }
        if (countMin == 60) {
            countHrs = countHrs + 1;
            countMin = 0;
            countSec = 0;
        }
        var countHrsStr = countHrs;
        var countMinStr = countMin;
        var countSecStr = countSec;
        var countMiliSecStr = countMiliSec;
        
        countHrsStr = (countHrs < 10) ? "0" + countHrsStr : countHrsStr;
        countMinStr = (countMin < 10) ? "0" + countMinStr : countMinStr;
        countSecStr = (countSec < 10) ? "0" + countSecStr : countSecStr;
        countMiliSecStr = (countMiliSec < 10) ? "0" + countMiliSecStr : countMiliSecStr;
        
        document.getElementById('milisec').innerHTML = countMiliSecStr;
        document.getElementById('sec').innerHTML = countSecStr;
        document.getElementById('min').innerHTML = countMinStr;
        document.getElementById('hrs').innerHTML = countHrsStr;
        setTimeout(() => {stopWatch()}, 1);
    }
}

startBtn.onclick = () => {
    timer = true;
    stopWatch();
}

pauseBtn.onclick = () => {
    timer = false;
}

resetBtn.onclick = () => {
    timer = false;
    document.getElementById('milisec').innerHTML = "000";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('hrs').innerHTML = "00";
}