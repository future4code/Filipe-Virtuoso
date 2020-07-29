1 -
Testa se o restante da divisão de um número por 2 é igual a 0,
para verificar se ele é par.

A mensagem "Passou no teste" será exibida quando o número for par(sendo o resto da divisão igual a 0).

2 - 

a. 
Para pesquisar o preço das frutas.

b. 
"O preço da fruta Maçã é R$ 2.25"

c. 
R$ 32.55

d.
"O preço da fruta Pêra é R$ 2.25"

3 - 
Retorna um erro porque let só existe dentro do seu escopo,
não sendo acessível dentro do segundo if. 

4 -

a.
```
const numero1 = parseInt(prompt("Digite o primeiro número."));
const numero2 = parseInt(prompt("Digite o segundo número."));

if(numero1 >= numero2) {
    console.log(numero1 + ' ' + numero2);
} else if(numero2 > numero1) {
    console.log(numero2 + ' ' + numero1);
} // Se os números forem iguais vão ser exibidos na tela
```

b.
```
let numbers = [];

numbers.push(parseInt(prompt("Digite o primeiro número.")));
numbers.push(parseInt(prompt("Digite o segundo número.")));
numbers.push(parseInt(prompt("Digite o terceiro número.")));

numbers.sort((a, b) => b - a);
console.log("Números em ordem decrescente: ", numbers);
```

c. 
```
{
    let numbers = [];
do {
    numbers = [];
    numbers.push(parseInt(prompt("Digite o primeiro número.")));
    numbers.push(parseInt(prompt("Digite o segundo número.")));
    numbers.push(parseInt(prompt("Digite o terceiro número.")));
} while(numbers[0] == numbers[1] && numbers[0] == numbers[2]);

numbers.sort((a, b) => b - a);

// Se os números forem iguais vão ser exibidos na tela
console.log("Números em ordem decrescente: ", numbers);

}
```

5 - 
a.
https://imgur.com/a/rEMAbb3

b.
```
const ossos = prompt("O animal possui óssos? ");
if(ossos.toLowerCase() === "sim") {
    console.log("É um animal vertebrado.");
    const pelos = prompt("O animal possui pelos? ");
    if(pelos.toLowerCase() === "sim") {
        console.log("É um mamífero!");
        const racional = prompt("Ele é racional? ");
        if(racional.toLowerCase() === "sim") {
            console.log("Estamos diante de um ser humano");
        } else {
            console.log("Estamos diante de um mamífero não humano");
        }
    } else {
        const penas = prompt("Ele possui penas? ");
        if(penas.toLowerCase() === "sim") {
            console.log("É uma ave!");
        } else {
            const terrestre = prompt("Ele é um animal terrestre? ");
            if(terrestre.toLowerCase() === "sim") {
                const tipo = prompt("Ele passa a maior parte do tempo na água ou na terra?");
                if(tipo.toLowerCase() === "água" || tipo.toLowerCase() === "agua") {
                    console.log("Ele é um anfíbio.");
                } else if(tipo.toLowerCase() === "terra") {
                    console.log("Ele é um réptil.");
                }
            } else {
                console.log("Ele é um peixe")
            }
        }
    }
} else {
    console.log("Só estamos classificando animais vertebrados.");
}
```




