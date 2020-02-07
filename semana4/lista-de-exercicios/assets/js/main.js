// Exercícios de interpretação

/*
Exercício 1 --
A funçao recebe um valor em dólares, depois é informada a cotação e a função
retorna o valor convertido para reais.

Exercício 2 --
165
"TIPO DE INVESTIMETO INFORMADO INCORRETO!"

Exercício 3 --
14
6
8

Exercício 4 --
-10
1590
*/

// Exercícios de lógica

/*
Exercício 1 --
// for loop
for(i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// forEach
array.forEach((element, index) => {
  console.log(element);
});

// map
array.map(element => {
  return element + 1;
});

Exercício 2 --
a.
false

b.
false

c.
true

d.
true

e.
true

Exercício 3 --
const quantidadeDeNumerosPares = 3;
let i = 0;
let number = 0;
while(i <= quantidadeDeNumerosPares - 1) {
  console.log(number);
  number += 2;
  i++;
}

Não funcionava porque i continuaria para sempre sendo 0

Exercício 4 --
const checkTriangle = (a, b, c) => {
  if(a === b && a === c) {
    console.log("É um triângulo equilátero");
  } else if(a === b || b === c || a === c) {
    console.log("É um triângulo isóceles");
  } else {
    console.log("É um triângulo escaleno");
  }
}

Exercício 5 --
const checkNumbers = (num1, num2) => {
  if(num1 > num2) {
    console.log(`O número ${num1} é maior do que o número ${num2}`);
    console.log(`A diferença entre eles é ${num1 - num2}`);
  } else if(num1 === num2) {
    console.log(`O número ${num1} é igual ao número ${num2}`);
  } else {
    console.log(`O número ${num2} é maior do que o número ${num1}`);
    console.log(`A diferença entre eles é ${num2 - num1}`);
  }
  if(num1 % num2 === 0) {
    console.log(`O número ${num1} é divisível pelo número ${num2}`);
  } else {
    console.log(`O número ${num1} não é divisível pelo número ${num2}`);
  }

  if(num2 % num1 === 0) {
    console.log(`O número ${num2} é divisível pelo número ${num1}`);
  } else {
    console.log(`O número ${num2} não é divisível pelo número ${num1}`);
  }
}
*/
