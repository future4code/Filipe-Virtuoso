// Exercícios de interpretação de código
//Exercício 1
/*
a.
Um array vazio, nenhum número será adicionado ao array.


b.
Um array com 6 elementos, [0, 1, 0, 1, 2, 3]


c.
Um array com 12 elementos, [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]
*/

//Exercício 2
/*
a.
0, 2 e undefined

b.
let arrayDeNumeros = [1, 2, 3, 4, 5];

const funcao = (lista, numero) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numero) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNumeros, 1));
console.log(funcao(arrayDeNumeros, 4));
console.log(funcao(arrayDeNumeros, 10));

Sim, funcionaria normalmente. :)
*/

// Exercício 3
/*
Ele percorre o array passado como parâmetro
e para cada elemento ele primeiro soma e armazena em uma variável
e depois multiplica e armazena em outra variável.
No final adiciona os dois resultados em um array e o retorna.
Nome: getArrSumAndMult(array);
*/

// Exercícios de escrita de código

//Exercício 4
//a.
const calcDogAge = years => {
  console.log(years * 7);
  return years * 7;
};

//b.
const showInfo = (name, age, adress, isStudent) => {
  const student = isStudent === true ? "sou" : "nao sou";
  return (
    "Eu sou " +
    name +
    ", tenho " +
    age +
    " anos, " +
    "moro em " +
    adress +
    " e " +
    student +
    " estudante"
  );
};

//Exercício 5
const findCentury = year => {
  if (year === 1000) {
    console.log("O ano de " + year + " pertence ao século X");
  } else if (year >= 1001 && year <= 1100) {
    console.log("O ano de " + year + " pertence ao século XI");
  } else if (year >= 1101 && year <= 1200) {
    console.log("O ano de " + year + " pertence ao século XII");
  } else if (year >= 1201 && year <= 1300) {
    console.log("O ano de " + year + " pertence ao século XIII");
  } else if (year >= 1301 && year <= 1400) {
    console.log("O ano de " + year + " pertence ao século XIV");
  } else if (year >= 1401 && year <= 1500) {
    console.log("O ano de " + year + " pertence ao século XV");
  } else if (year >= 1501 && year <= 1600) {
    console.log("O ano de " + year + " pertence ao século XVI");
  } else if (year >= 1601 && year <= 1700) {
    console.log("O ano de " + year + " pertence ao século XVII");
  } else if (year >= 1701 && year <= 1800) {
    console.log("O ano de " + year + " pertence ao século XVIII");
  } else if (year >= 1801 && year <= 1900) {
    console.log("O ano de " + year + " pertence ao século XIX");
  } else if (year >= 1901 && year <= 2000) {
    console.log("O ano de " + year + " pertence ao século XX");
  } else if (year >= 2001 && year <= 2100) {
    console.log("O ano de " + year + " pertence ao século XXI");
  }
};

//Exercício 6
//a.
const getArrLength = array => {
  return array.length;
};

//b.
const evenOdd = number => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

//c.
const getEvenLength = array => {
  let total = 0;
  for (elem in array) {
    if (elem % 2 === 0) {
      total++;
    }
  }
  return total;
};

//d.
const getEvenLength = array => {
  let total = 0;
  for (elem in array) {
    if (evenOdd(elem) === true) {
      total++;
    }
  }
  return total;
};
