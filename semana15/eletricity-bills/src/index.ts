// Interfaces
import { Client } from './interfaces/Client';

// Abstract
import { Place } from './abstract/Place';

import { Residence } from './Residence';
import { Commerce } from './Commerce';
import { Industry } from './Industry';

import { uuid } from 'uuidv4';

// ----------Exercício 1----------

const newClient: Client = {
  name: 'Filipe',
  registrationNumber: 1,
  consumedEnergy: 10,
  calculateBill(): number {
    return 2;
  },
};

console.log('--------------------------------');
console.log(`Nome: ${newClient.name}`);
console.log(`ID: ${newClient.registrationNumber}`);
console.log(`Consumo: ${newClient.consumedEnergy}`);
console.log(`Valor da conta: ${newClient.calculateBill()}`);
console.log('--------------------------------');

// ----------Exercício 2----------

//const newPlace = new Place(); //Cannot create an instance of an abstract class

/*
b. Fazendo com que uma nova classe herde as caracteristicas da classe abstrata e 
assim podendo criar uma nova instância.
*/

// ----------Exercício 3----------

const newResidence = new Residence(1, '35160222');
const newCommerce = new Commerce(2, '35150333');
const newIndustry = new Industry(10, '35170444');

console.log(newResidence.getCep());
console.log(newCommerce.getCep());
console.log(newIndustry.getCep());

// ----------Exercício 4----------

/*
Os disponíveis na classe Place, na classe Residence, na classe ResidentialClient
e os que foram implementados por causa da interface Client
*/

// ----------Exercício 5----------

/*

a. Ambas são uma classe Place e implementam a interface Client
b. Calculam a conta baseado em valores diferentes

*/

// ----------Exercício 6----------

/*
a. Deve ser filha da classe Industry, pois o preço da conta depende da quantidade
total de máquinas.

b. Clients, que define o método para o cálculo da conta

c. Pois não devemos poder modificar os valores dos dados usados para calcular o valor da conta
*/

// ----------Exercício 7----------
