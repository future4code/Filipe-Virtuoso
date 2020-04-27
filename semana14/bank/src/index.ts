import { readFileSync, writeFileSync } from 'fs';
import * as moment from 'moment';
import { Z_NO_COMPRESSION } from 'zlib';
moment.locale('pt-br');

// createAccount
const operationType: string = process.argv[4];
const name: string = process.argv[5];
const cpf: string = process.argv[6];
const data: string = process.argv[7];

// PayBill
const value: number = Number(process.argv[5]);
const description: string = process.argv[6];
let paymentDate: any = process.argv[7];
const accountCpf: string = process.argv[8];

// addBalance
const addValue: number = Number(process.argv[7]);

// transfer
const recipientName: string = process.argv[7];
const recipientCPF: string = process.argv[8];
const sentValue: number = Number(process.argv[9]);

let accounts = JSON.parse(readFileSync('contas.json').toString());

type extract = {
  value: number;
  description: string;
  paymentDate: moment.Moment;
};

type user = {
  user: {
    name: string;
    cpf: string;
    data: string;
  };
  balance: number;
  extract: any[];
};

// Validate
function validateCpf(cpf: string): any {
  if (accounts.length === 0) {
    return false;
  } else if (accounts.filter((el: any) => el.user.cpf === cpf).length > 0) {
    return true;
  } else {
    return false;
  }
}

switch (operationType) {
  case 'createAccount':
    if (!name || !cpf || !data) {
      console.log('É preciso informar os documentos!');
      break;
    }

    let newAccount: user = {
      user: {
        name,
        cpf,
        data,
      },
      balance: 0,
      extract: [],
    };

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
    break;
  case 'getBalance':
    if (!name || !cpf) {
      console.log('Infome os dados necessários');
      break;
    }

    function getBalance(cpf: string): void {
      console.log(
        'Saldo atual é: R$ ' +
          accounts.filter((el: user) => el.user.cpf === cpf)[0].balance
      );
    }

    validateCpf(cpf) ? getBalance(cpf) : console.log('CPF inválido!');
    break;
  case 'payBill':
    if (!value || !description || !accountCpf) {
      console.log('Impossível realizar o pagamento! Verifique as informações.');
      break;
    }

    let currentDate: moment.Moment = moment();
    let account = accounts.filter(
      (account: user) => account.user.cpf === accountCpf
    );

    if (currentDate.diff(moment(paymentDate, 'DD/MM/YYYY'), 'days') > 0) {
      console.log('Não é possível realizar o pagamento');
      break;
    }

    if (value > account[0].balance) {
      console.log('Saldo insuficiente!');
      break;
    }

    if (!paymentDate) {
      paymentDate = currentDate.format('DD/MM/YYYY');
    }

    const newPayment: extract = {
      value,
      description,
      paymentDate,
    };

    account[0].balance -= value;
    account[0].extract.push(newPayment);
    writeFileSync('contas.json', JSON.stringify(account, null, 2));
    console.log('Pagamento aprovado!');
    break;
  case 'addBalance':
    if (!name || !cpf || !addValue) {
      console.log(
        'informações incompletas, não foi possível realizar a operação.'
      );
      break;
    }

    function addBalance(value: number): void {
      try {
        let account = accounts.filter(
          (account: user) => account.user.cpf === cpf
        );
        account[0].balance += value;
        writeFileSync('contas.json', JSON.stringify(account, null, 2));
        console.log('Novo saldo: R$: ' + account[0].balance);
      } catch (err) {
        console.log(err);
      }
    }

    validateCpf(cpf)
      ? addBalance(addValue)
      : console.log('Informe um cpf válido!');
    break;
  case 'transfer':
    if (!name || !cpf || !recipientName || !recipientCPF || !sentValue) {
      console.log('Informe os dados necessários corretamente!');
      break;
    }

    function transferMoney(value: number): void {
      let account = accounts.filter(
        (account: user) => account.user.cpf === cpf
      );
      let recipientAccount = accounts.filter(
        (account: user) => account.user.cpf === recipientCPF
      );

      if (account[0].balance < value) {
        console.log('Saldo insuficente!');
      } else {
        account[0].balance -= Number(value);
        recipientAccount[0].balance += Number(value);
        console.log('----------main----------');
        console.log(account);
        console.log('---------recipient--------');
        console.log(recipientAccount);
        console.log('----------all----------');
        console.log(accounts);
        console.log('--------------------');
        writeFileSync('contas.json', JSON.stringify(accounts, null, 2));
        console.log('Transferência realizada com sucesso!');
      }
    }

    if (validateCpf(cpf) && validateCpf(recipientCPF)) {
      transferMoney(sentValue);
    } else {
      console.log('Informe um CPF válido!');
    }
    break;
  case 'getAllAccounts':
    console.log(accounts);
    break;
}
