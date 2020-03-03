// Commentaar

const actieButton = document.getElementById("button");
actieButton.addEventListener('click', actions);

const verstrekenTijd = document.getElementById('verstrekentijd');
const timeList = document.getElementById('list');

var startTime;
var stopTime;
let myTime = [];

//
function statusButtons() {
    if (actieButton.getAttribute('value') === 'start') {
        actieButton.setAttribute('value', 'stop');
        actieButton.innerText = 'stop';
    } else {
        actieButton.setAttribute('value', 'start');
        actieButton.innerText = 'start';
    }
}

//
function storeTime(tijd) {
    if (actieButton.getAttribute('value') === 'start') {
        startTime = tijd;
    } else {
        stopTime = tijd;
    }
}

//
function actions() {
    var tijd =  Date.now();

    storeTime(tijd);
    if (actieButton.getAttribute('value') === 'stop') {
        let verschil = calculateTime(startTime, stopTime);

        addTimeToList(verschil);
        showCalculatedTime(verschil);
        showTimeList();

    }
    statusButtons();
}

// Deze functie doet:
function calculateTime(start, stop) {
    var verschil = stop - start;
    return verschil;
}

//
function showCalculatedTime(tijd) {
    verstrekenTijd.innerText = `Verstreken tijd: ${tijd}`;
}

//
function addTimeToList(item) {
    myTime.push(item);
}

//
function showTimeList() {
    // Zet deze functie om zodat de lijst getoond wordt op het scherm
    console.table(myTime);
}