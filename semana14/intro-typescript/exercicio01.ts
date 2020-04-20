function calculate(num1: number, num2: number): void {
  console.log(`A soma é igual a ${num1 + num2}`);
  console.log(`A subtração é igual a ${num1 - num2}`);
  console.log(`A Multiplicação é igual a ${num1 * num2}`);
  if (num1 > num2) {
    console.log(`O número ${num1} é maior que o número ${num2}`);
  } else {
    console.log(`O número ${num2} é maior que o número ${num1}`);
  }
}
