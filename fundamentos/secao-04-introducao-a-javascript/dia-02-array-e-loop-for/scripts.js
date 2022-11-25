let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

/* for (let index = 0; index < numbers.length; index ++) {
    console.log(numbers[index]);
} */

//Some todos os valores contidos no array e imprima o resultado;

let result = 0

for (let index = 0; index < numbers.length; index ++) {
    result += numbers[index];
    console.log(result);
} 

//Calcule e imprima a média aritmética dos valores contidos no array; A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.


let average = result / numbers.length;
console.log(average);


//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if (average > 20) {
    console.log("valor maior que 20");
} else {
    console.log('valor menor ou igual a 20');
}


//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index ++) {
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index];
    }
}
console.log(higherNumber);


//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;


let oddsnumbers = 0;

for (let index = 0; index < numbers.length; index ++) {
  if (numbers[index] % 2 !== 0) {
    oddsnumbers += 1;
  }
}

if (oddsnumbers === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(oddsnumbers);
}




//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let smallesNumber = numbers[0];

for (let index = 1; index < numbers.length; index ++) {
    if (numbers[index] < smallesNumber) {
        smallesNumber = numbers[index];
    }
}

console.log (smallesNumber);


//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let numbers2 = [];

for (let index = 1; index <=25; index ++) {
    numbers2.push(index)
}

console.log(numbers2);


//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < numbers2.length; index ++) {
    console.log(numbers2[index]/2)

}
