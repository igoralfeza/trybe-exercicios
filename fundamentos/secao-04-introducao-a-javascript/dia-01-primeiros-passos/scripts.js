//Exercício 01//

const a = 10;
const b = 5;

console.log (a + b);
console.log (a - b);
console.log (a * b);
console.log (a / b);
console.log (a % b);

//Exercício 02//

const joaoNote = 5;
const mariaNote = 7;

if (joaoNote > mariaNote) {
    console.log(joaoNote);
} else { 
    console.log(mariaNote);
}

//Exercício 03//

const marcelaNote = 5;
const marianaNote = 7;
const joseNote = 9;

if (marcelaNote > mariaNote && marcelaNote > joseNote) {
    console.log(marcelaNote);
} else if (marianaNote > joseNote && marianaNote > marcelaNote) { 
    console.log(marianaNote);
} else if (joseNote > marcelaNote && joseNote > marianaNote) { 
    console.log(joseNote);
}