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

// Exercícios de funções
/*
Exercício 1 --
const findInArr = (arr) => {

  arr.sort((a, b) => {
    return a - b;
  })

  console.log(`O segundo maior número é ${arr[arr.length - 2]} e o segundo menor é ${arr[1]}`;

}

Exercício 2 --
const sayHi = () => {
  alert("Hello Future4");
}

sayHi();
*/

// Exercícios de objetos
/*
Exercício 1 --
Array quando precisamos trabalhar com conjuntos de elementos e objetos para que possamos
fazer uma abstração, facilitando o trabalho.

Exercício 2 --
class Retangulo {
    constructor(largura, altura) {
      this.largura = largura;
      this.altura = altura;
      this.perimetro = 2 * (largura * altura);
      this.area = largura * altura;
    }
}
const criaRetangulo = (largura, altura) => {
  return new Retangulo(largura, altura);
}

Exercício 3 --
  const movie = {
    title: "Intouchables",
    year: "2011",
    director: ["Olivier Nakache", "Éric Toledano"],
    actors: ["François Cluzet", "Omar Sy"],
    actresses: ["Audrey Fleurot", "Anne Le Ny"] 
  }

  console.log(`Venha assistir ao filme ${movie.title}, de ${movie.year}, dirigido por ${movie.director.toString(', ')} e 
  estrelado por ${movie.actors.toString(', ')} e ${movie.actresses.toString(', ')}`);

Exercício 4 --  
  const person = {
    name: "Luiz Filipe",
    idade: 28,
    email: "lfvirtuoso@gmail.com",
    endereco: "Rua x"
  }
*/

//Exercícios de funções de array de array
/*
Exercício 1 --
Exercício 2 --
Exercício 3 --
Exercício 4 --
Exercício 5 --
*/
