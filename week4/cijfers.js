// console.log(this === window);
// console.log(this);

function Vak(vak) {
    let newVak = this;
    newVak.vak = vak;
}

function Toets(id, beschrijving, vak) {
    let newToets = this;

    newToets.id = id,
    newToets.beschrijving = beschrijving,
    newToets.vak = vak;
}

function Examen(toets, cijfer) {
    let newCijfer = this;

    newCijfer.toets = toets;
    newCijfer.cijfer = cijfer;
}

let toets = new Toets('001', 'functies',
            new Vak('FRO'));

let cijfers = [];
cijfers.push(new Examen(toets, 4));

cijfers.push(new Examen(new Toets(
    '002',
    'array',
    new Vak('FRO')),
    9));

cijfers.push(new Examen(new Toets(
    '003',
    'object',
    new Vak('FRO')),
    7));

let menu = [];
menu.push('Soep');
menu.push('Visje');
menu.push('Cola');

for(let count = 4; count > 3  && count < 10; count++) {
    console.log(menu[count]);
}
console.log('Gereed');
