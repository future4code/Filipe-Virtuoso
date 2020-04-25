import { readFileSync, writeFileSync } from 'fs';
import * as moment from 'moment';

const operationType: string = process.argv[5];
const name: string = process.argv[6];
const cpf: string = process.argv[7];
const data: string = process.argv[8];

let accounts = JSON.parse(readFileSync('contas.json').toString());

type user = {
  user: {
    name: string;
    cpf: string;
    data: string;
  };
  balance: number;
  extract: any[];
};

if (operationType === 'createAccount') {
  if (!name || !cpf || !data) {
    console.log('É preciso informar os documentos!');
  } else {
    let newAccount: user = {
      user: {
        name,
        cpf,
        data,
      },
      balance: 0,
      extract: [],
    };

    function validateCpf(cpf: string): any {
      if (accounts.length === 0) {
        return false;
      } else if (accounts.filter((el: any) => el.user.cpf === cpf).length > 0) {
        return true;
      } else {
        return false;
      }
    }

    function createAccount(): void {
      try {
        accounts.push(newAccount);
        writeFileSync('contas.json', JSON.stringify(accounts, null, 2));
      } catch (err) {
        console.log(err);
      }
    }

    const age: number = moment().diff(moment(data, 'DD/MM/YYYY'), 'years');

    if (age >= 18) {
      validateCpf(newAccount.user.cpf)
        ? console.log('Esse CPF já existe')
        : createAccount();
    } else {
      console.log('Você precisa ser maior de 18 anos para criar uma conta!');
    }
  }
}
