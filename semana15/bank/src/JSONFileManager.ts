import * as fs from 'fs';
import { UserAccount } from './UserAccount';

export class JSONFileManager {
  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }
  writeObjectToFile(objectToSave: Object) {
    fs.writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 2));
  }

  getObjectFromFile(): Object {
    const accountsJson = JSON.parse(fs.readFileSync(this.fileName).toString());
    console.log(accountsJson);
    const accounts: UserAccount[] = [];
    accountsJson.forEach((account: any) => {
      accounts.push(new UserAccount(account.cpf, account.name, account.birth));
    });
    return accounts;
  }
}
