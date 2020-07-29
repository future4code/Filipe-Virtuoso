/*
// Exercícios de interpretação de código

1 - 

a. false

b. false

c. true

d. false

e. boolean

2 - 

a. Array é uma sequência de dados.

b. 0

c. Usando a propriedade .length

d. 

I.  undefined

II. null

III. 11

IV. 3 e 4

V. 19 e 9

VI. 3

VII. 1
*/

// Exercícios de escrita de código

// 1
// Achei a fórmula oorreta para converter Fahrenheit para Kelvin na internet.
// K = (°F + 459.67) / 1.8
function fahrenheitToKelvin(fahrenheit) {
  const kelvin = (fahrenheit- 32) * 5/9 + 273.15;
  return kelvin;
}

function celsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

// a.
console.log(fahrenheitToKelvin(77) + "K°"); //77°F --> Kelvin

// b.
console.log(celsiusToFahrenheit(80) + "C°"); //80° --> Fahrenheit

// c.
console.log(celsiusToFahrenheit(30) + "K°" + ' e ' + fahrenheitToKelvin(celsiusToFahrenheit(30)) +  "K°");

// d.
function celsiusToFahrenheit2() {
  const celsius = parseInt(prompt("Insira a temperatura em graus celsius: "));
  const fahrenheit = celsius * 9/5 + 32;
  console.log("A temperatura " + celsius + "C°" + ' convertida é igual a : ' + fahrenheit + "K°");
}

celsiusToFahrenheit2()

// 2

let answer;
answer = prompt("1. Qual é o seu nome?");
console.log("1. Qual é o seu nome?");
console.log("Resposta: " + answer);

answer = prompt("2. Qual é a sua idade?");
console.log("2. Qual é a sua idade?");
console.log("Resposta: " + answer);

answer = prompt("3. Qual o seu filme favorito?");
console.log("3. Qual o seu filme favorito?");
console.log("Resposta: " + answer);

answer = prompt("4. Tem animais de estimação?");
console.log("4. Tem animais de estimação?");
console.log("Resposta: " + answer);

answer = prompt("5. Qual o seu livro preferido?");
console.log("5. Qual o seu livro preferido?");
console.log("Resposta: " + answer);

// 3

// quilowatt-hora de energia == R$0.05

// a.
/*
A letra A pede para que seja calculado o valor do quilowatt-hora, porém, o mesmo
já foi informado no enunciado da questão, vou considerar que seja para calcular o 
valor a ser pago. O enunciado precisaria também dizer que o valor do quilowatt-hora corresponderia 
a um valor x do salário mínimo para que o cálculo pudesse ser feito.
*/
// O valor do quilowatt-hora é R$ 0.05

// b.
console.log("O valor total a ser pago é: R$ ", 280 * 0.05);

// c.

function calcEletricityBill(quilowatts, discount) {
  let total = 280 * 0.05;
  console.log("O valor total com desconto de 15% é: R$ " + (total - (total * (discount / 100))));
}

calcEletricityBill(280, 15);

  
  