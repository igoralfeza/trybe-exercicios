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

//Exercício 04//


const value = -15;

if (value > 0) {
    console.log("positive");
} else if (value < 0) {
    console.log("negative");
} else {
    console.log("zero");
}


//Exercício 05//

const angleA = 100;
const angleB = 40;
const angleC = 40;

let somaangles = angleA + angleB + angleC;
let positAngles = angleA > 0 && angleB > 0 && angleC > 0;

if (positAngles){
    if (somaangles === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log("erro");
}




