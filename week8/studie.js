// Voorbeeld

let docent = {
    naam:       'Simon',
    lessen:     ['FRO', 'SEC', 'MOBILE', 'TDD', 'EXA'],
    talen:      ['Java', 'JavaScript', 'Swift', 'PHP', 'SQL'],
    klassen:    ['MD1A', 'MD1B', 'MD2A', 'MD2B', 'MD3A', 'MD3B']
};

function Student(id, klas) {
    let studObj = this;
    studObj.id = id;
    studObj.klas = klas;
    studObj.lessen = [];

    studObj.les = function(les) {
        studObj.lessen.push(les);
    }

}

let student007 = new Student('007', 'MD1A');
let student008 = new Student('008', 'MD2A');

student007.les('PHP');
student007.les('FRO');
student007.les('CMS');
student007.les('PROJ');

console.log(student007);
console.log(student008);

student008.les('SEC');
student008.les('TDD');
console.log(student008);

// student008.show = function() {
//     student008.lessen.forEach(function(element) {
//         console.log(element);
//     })
// }
// student008.show();