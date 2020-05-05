import { Transaction } from './Transaction';
import * as moment from 'moment';

export class UserAccount {
  private balance: number;
  private cpf: string;
  private name: string;
  private age: number;
  private birth: string;
  private transactions: Transaction[];

  constructor(cpf: string, name: string, birth: string) {
    this.balance = 0;
    this.cpf = cpf;
    this.name = name;
    this.age = moment().diff(moment(birth, 'DD/MM/YYYY'), 'years');
    this.birth = birth;
    this.transactions = [];
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getBalance() {
    console.log(`Saldo: ${this.balance}`);
  }

  public addBalance(balance: number) {
    this.balance += balance;
  }
}
