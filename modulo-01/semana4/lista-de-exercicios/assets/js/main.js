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

  const anonimizarPessoa = (obj) => {
    const anonPerson = {
      ...obj,
      name: "Anônimo"
    }
  return anonPerson
  }
*/

//Exercícios de funções de array
/*
Exercício 1 --
const lista = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

a.
const adultos = lista.filter(el => {
  return el.idade >= 20;
});

b.
const adultos = lista.filter(el => {
  return el.idade < 20;
});

Exercício 2 --

const array = [1, 2, 3, 4, 5, 6]

a.
const timesTwo = array.map(el => {
  return el * 2;
});

b. 
const timesThree = array.map(el => {
  return String(el * 3);
});

c. 
const evenOdd = array.map(el => {
  return `${el % 2 === 0 ? `${el} é par` : `${el} é ímpar`} `;
});

Exercício 3 --
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

a. 
const autorizados = pessoas.filter(el => {
   return el.idade > 14 && el.idade < 60 && el.altura >= 1.5;
});

b. const naoAutorizados = pessoas.filter(el => {
   return !(el.idade > 14 && el.idade < 60 && el.altura >= 1.5);
});

Exercício 4 --
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const emails = consultas.map(el => {
  return `${
    el.cancelada === false
      ? `Olá, ${el.genero === "masculino" ? `Sr` : `Sra`} ${
          el.nome
        }. Estamos enviando esta mensagem para
${
  el.genero === "masculino" ? `lembrá-lo` : `lembrá-la`
} da sua consulta no dia ${el.dataDaConsulta}. Por favor, acuse
o recebimento deste e-mail.`
      : `Olá, ${el.genero === "masculino" ? `Sr.` : `Sra.`} ${
          el.nome
        }. Infelizmente, sua consulta marcada
para o dia ${el.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
contato conosco para remarcá-la`
  }`;
});

Exercício 5 --
  const contas = [
    { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, compras: [] }
  ]

  const atualizarSaldo = (obj) => {

    for(let i = 0; i < obj.length; i++) {
      obj[i].saldoTotal -= obj[i].compras.reduce((a, b) => a + b, 0);
    }
  };

*/
