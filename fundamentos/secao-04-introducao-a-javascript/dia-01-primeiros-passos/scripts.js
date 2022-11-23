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

//Exercício 06 - Copiado do gabarito e entendido//

const chessPiece = 'avada';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

//Exercício 07//

const nota = 75;

if (nota < 0 || nota > 100 ) {
    console.log("Erro");
} else if ( nota >= 90) {
    console.log("A");
} else if (nota < 90 && nota >= 80) {
    console.log("B");
} else if (nota < 80 && nota >= 70) {
    console.log("C");
} else if (nota < 70 && nota >= 60) {
    console.log("D");
} else if (nota < 60 && nota >= 50) {
    console.log("E");
} else if (nota < 50) {
    console.log("F");
}

//Exercício 08//

