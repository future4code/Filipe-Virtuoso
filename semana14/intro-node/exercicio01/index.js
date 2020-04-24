const operation = process.argv[2];
const number1 = Number(process.argv[3]);
const number2 = Number(process.argv[4]);

switch (operation) {
  case 'add':
    console.log(`A soma é igual a ${number1 + number2}`);
    break;
  case 'sub':
    console.log(`A subtração é igual a ${number1 - number2}`);
    break;
  case 'mult': // Precisa ser passada entre aspas no terminal
    console.log(`A multiplicação é igual a ${number1 * number2}`);
    break;
  case 'div':
    console.log(`A divisão é igual a ${number1 / number2}`);
    break;
  default:
    console.log('Operação inválida!');
}
