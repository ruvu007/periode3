// Het aantal elementen in een form met de name 'kamer1'
const kamer1 = document.forms['kamer'].elements['kamer1'];
const melding = document.getElementById('kamer1');

let list =  document.getElementsByTagName("input");
console.table(list);

// Voor als er meerdere fieldsets zijn
const fields = document.querySelectorAll('fieldset');

function KamerObject(checkInTime, checkOutTime, minCheckOut)  {
    this.checkInTime = checkInTime;
    this.checkOutTime = checkOutTime;
    this.minCheckOut = minCheckOut;
}

let kamerReserved = new KamerObject(0, 0, 1000);

// let kamerReserved = {'checkInTime': 0, 'checkOutTime': 0, 'minCheckOut': 5000};



let message =  {
    checkIn :'U kunt over 10 minuten weer uitchecken',
    validCheckIn : 'Dank U wel voor Uw bezoek.',
    unvalidCheckOut : 'U kunt nog niet uitchecken!'
}

for (let count=0; count < kamer1.length; count++) {

    kamer1[count].addEventListener('click', function () {
        if (this.value === 'checkin') {
            kamerReserved.checkInTime = Date.now();
            melding.innerText = message['checkIn'];
        } else {
            kamerReserved.checkOutTime = Date.now();
            isValidCheckOut = timeCheck(kamerReserved);

            if (isValidCheckOut === true) {
                melding.innerText = message['validCheckIn'];
            } else {
                melding.innerText = message['unvalidCheckOut'];
            }

        }
    });
}

function timeCheck(kamer) {
    // ternary operator
    isValid = (kamer.checkOutTime - kamer.checkInTime > kamer.minCheckOut) ? true : false;
    return isValid;
}