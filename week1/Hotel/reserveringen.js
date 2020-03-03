
// Het aantal elementen in een form met de name 'kamer1'
const kamer1 = document.forms['kamer'].elements['kamer1'];
const melding = document.getElementById('melding');
const fields = document.querySelectorAll('fieldset');
// alert(fields.length);

let checkInTime;
let checkOutTime;
let minCheckOut = 600;

for (let count=0; count < kamer1.length; count++) {

    kamer1[count].addEventListener('click', function () {
        if (this.value === 'checkin') {
            // Hier zit een bug. Los het op.
            // Zodra je nog niet kan uitchecken klik je weer op checkin maar
            // daardoor wordt opnieuw de begintijd gezet en niet doorgeteld.
            checkInTime = Date.now();
            melding.innerText = 'U kunt over 10 minuten weer uitchecken';
        } else {
            checkOutTime = Date.now();
            isValidCheckOut = timeCheck(checkInTime, checkOutTime);

            if (isValidCheckOut === true) {
                melding.innerText = 'Dank U wel voor Uw bezoek';
            } else {
                melding.innerText = 'U kunt nog niet uitchecken';
            }

        }
    });
}

function timeCheck() {
    // ternary operator
    isValid = (checkOutTime - checkInTime > minCheckOut) ? true : false;
    return isValid;
}