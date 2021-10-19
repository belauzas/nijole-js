/************************
* KINTAMIEJI
************************/

const a = 5;
const b = 7.77;
const c = a + b;

console.log(a, b, c);

const d = "labas";
const e = 'iki';

// labas ir iki
const f = d + ' ir ' + e;
console.log(f);

// Vienguba (') kabute.
const g = "Vienguba (') kabute.";
console.log(g);

// Dvyguba (") kabute.
const h = 'Dvyguba (") kabute.';
console.log(h);

// Vienguba (') ir dvyguba (") kabutes.
const i1 = 'Vienguba (\') ir dvyguba (") kabutes.';
const i2 = "Vienguba (') ir dvyguba (\") kabutes.";
const i3 = "Vienguba (\') ir dvyguba (\") kabutes.";
console.log(i1);
console.log(i2);
console.log(i3);

// Labas, Nijole! Kaip tau sekasi?
const name = 'Nijole';
const question0 = 'Labas, ' + name + '! Kaip tau sekasi?';
const question1 = `Labas, ${name}! Kaip tau sekasi?`;

console.log(question0);
console.log(question1);

const tiesa = true;
const melas = false;
console.log(tiesa, melas);

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const marksCount = marks.length;
console.log('Pazymiu turime:', marksCount);

const firstMark = marks[0];
console.log('Pirmas:', firstMark);

const lastMark = marks[marks.length - 1];
console.log('Paskutinis:', lastMark);

// itraukti nauja pazymi (7) i array
marks.push(7);
console.log(marks);
marks.pop();
console.log(marks);
marks.unshift(3);
console.log(marks);
const el = marks.shift();
console.log(marks);

const Al = {
    name: 'Elas Bandis',
    age: 99,
    married: true,
}

console.log(Al);
console.log(Al.name);
console.log(Al.age);
console.log(Al.married);

console.log(Al['name']);
console.log(Al['age']);
console.log(Al['married']);

const maneDominaSavybe = 'name';
const atsakymasITavoKlausima = Al[maneDominaSavybe];    // 👍
console.log(atsakymasITavoKlausima);

console.clear();
/************************
* SALYGOS SAKINIAI
************************/

// >, <, >=, <=, !==, ===
const color = 5;
if (color === 0) {
    console.log('raudona');
} else if (color === 1) {
    console.log('melyna');
} else {
    console.log('nepasirinkai spalvos');
}

if (false === '') {
    console.log('sutampa');
} else {
    console.log('NE-sutampa');
}

// kiek = 'daug'
// kiek = 'mazai'
const kiek = 4 < 2 ? 'daug' : 'mazai';
console.log(kiek);

const diena = 8;
switch (diena) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;

    case 6:
    case 7:
        console.log('savaitgalis');
        break;

    default:
        console.log('tokia diena neegzistuoja');
        break;
}

console.clear();
/************************
* CIKLAI
************************/

// for, for-in, for-of, while, do-while, foreach
// map, sort, reduce, filter

for (let n = 5; n < 8; n++) {
    console.log(n);
}

console.log('Pazymiai: for');
for (let i = 0; i < marks.length; i++) {
    const mark = marks[i];
    console.log(mark);
}

console.log('Pazymiai: for-of');
for (const mark of marks) {
    console.log(mark);
}

console.log('Pazymiai: while');
let i = 0;
while (i < marks.length) {
    const mark = marks[i];
    console.log(mark);
    i++;
}

console.log('Pazymiai: while random');
let randomSkaicius = 0;
while (randomSkaicius < 0.9) {
    randomSkaicius = Math.random();
    console.log(randomSkaicius);
}

console.log('Pazymiai: for random');
let randomSkaiciusFor = 0;
for (; randomSkaiciusFor < 0.9;) {
    randomSkaiciusFor = Math.random();
    console.log(randomSkaiciusFor);
}

console.log('Pazymiai: foreach');
function daugiauUzPenkis(a) {
    if (a > 5) {
        console.log(a);
    }
}
function maziauUzPenkis(a, b, c) {
    if (a < 5) {
        console.log('value:', a, ', index:', b, ', array:', c);
    }
}

console.log(marks);

console.log('daugiau');
marks.forEach(daugiauUzPenkis);

console.log('maziau');
marks.forEach(maziauUzPenkis);

console.log('Darzoves: do-while');
// Darzove: [darzoves pavadinimas]
const darzoves = [];
let di = 0;
do {
    const darzove = darzoves[di];
    console.log(`Darzoves: ${darzove}`);
    di++;
} while (di < darzoves.length);



console.log('Person (Al): for-in');
console.log(Al);

console.log('############### Object.keys + for-of');
const eloKeywordai = Object.keys(Al);
for (const key of eloKeywordai) {
    console.log(key, ':', Al[key]);
}

console.log('############### for-in');
for (const key in Al) {
    console.log(key, ':', Al[key]);
}

console.log('Map:');
const skaiciai = [-5, 2, 3, -4, 0, -3, 1];
const dvygubiSkaiciai = [];
const dvygubiSkaiciaiMap = skaiciai.map(sk => sk * 2);

for (const sk of skaiciai) {
    dvygubiSkaiciai.push(sk * 2);
}
console.log(dvygubiSkaiciai);
console.log(dvygubiSkaiciaiMap);

console.log('Filter:');
const teigiamiSkaiciai = [];
const teigiamiSkaiciaiFilter = skaiciai.filter(sk => sk > 0);

for (const sk of skaiciai) {
    if (sk > 0) {
        teigiamiSkaiciai.push(sk);
    }
}

console.log(teigiamiSkaiciai);
console.log(teigiamiSkaiciaiFilter);

console.log('Sort:');
const sorted = [4, 3, 5, 7, -3, 2, 1];
for (let i = 0; i < sorted.length - 1; i++) {
    for (let k = i + 1; k < sorted.length; k++) {
        if (sorted[i] < sorted[k]) {
            const x = sorted[i];
            sorted[i] = sorted[k];
            sorted[k] = x;
        }
    }
}
console.log(sorted);

const sortedSort = sorted.sort((a, b) => b - a);
console.log(sortedSort);

console.log('Reduce:');
console.log(marks);
let suma = 0;
for (const mark of marks) {
    suma += mark;
}
console.log('Vidurkis:', suma / marks.length);

const sumaReduce = marks.reduce((suma, mark) => suma + mark, 0);
console.log('Vidurkis:', sumaReduce / marks.length);