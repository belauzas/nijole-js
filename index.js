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

/************************
* SALYGOS SAKINIAI
************************/
