import { Bank } from './Bank';
import * as moment from 'moment';

const operation: string = process.argv[5];
const cpf: string = process.argv[6];
const name: string = process.argv[7];
const birth: string = process.argv[8];
const value: number = Number(process.argv[8]);

const bank: any = new Bank();

switch (operation) {
  case 'getAllAccounts':
    bank.getAllAccounts();
    break;
  case 'createAccount':
    bank.createAccount(cpf, name, birth);
    break;
  case 'checkBalance':
    bank.getAccountByCpf(cpf).getBalance();
    break;
  case 'addBalance':
    bank.getAccountByCpf(cpf).addBalance(value);
    bank.saveAccounts();
    break;
}
