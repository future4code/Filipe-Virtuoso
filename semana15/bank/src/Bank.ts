import { UserAccount } from './UserAccount';
import { JSONFileManager } from './JSONFileManager';
import * as moment from 'moment';

const fileManager: JSONFileManager = new JSONFileManager('bank.json');
const accounts = fileManager.getObjectFromFile() as UserAccount[];

export class Bank {
  validateCpf(accountInfo: UserAccount): boolean {
    if (
      accounts.filter(
        (account: UserAccount) => account.getCpf() === accountInfo.getCpf()
      ).length > 0
    ) {
      return false;
    } else {
      return true;
    }
  }

  createAccount(cpf: string, name: string, birth: string): void {
    if (moment().diff(moment(birth, 'DD/MM/YYYY'), 'years') >= 18) {
      const newAccount = new UserAccount(cpf, name, birth);
      if (this.validateCpf(newAccount)) {
        accounts.push(newAccount);
        this.saveAccounts();
      } else {
        console.log('Esse CPF já se encontra cadastrado no sistema!');
      }
    } else {
      console.log('Você não possui idade suficente para abrir uma conta!');
    }
  }

  getAllAccounts(): void {
    console.log(accounts);
  }

  getAccountByCpf(cpf: string): UserAccount {
    const index: number = accounts.findIndex(
      (account) => account.getCpf() === cpf
    );
    console.log(accounts[index]);
    return accounts[index];
  }

  saveAccounts(): void {
    fileManager.writeObjectToFile(accounts);
  }
}
