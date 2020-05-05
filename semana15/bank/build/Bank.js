"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserAccount_1 = require("./UserAccount");
const JSONFileManager_1 = require("./JSONFileManager");
const moment = require("moment");
const fileManager = new JSONFileManager_1.JSONFileManager('bank.json');
const accounts = fileManager.getObjectFromFile();
class Bank {
    validateCpf(accountInfo) {
        if (accounts.filter((account) => account.getCpf() === accountInfo.getCpf()).length > 0) {
            return false;
        }
        else {
            return true;
        }
    }
    createAccount(cpf, name, birth) {
        if (moment().diff(moment(birth, 'DD/MM/YYYY'), 'years') >= 18) {
            const newAccount = new UserAccount_1.UserAccount(cpf, name, birth);
            if (this.validateCpf(newAccount)) {
                accounts.push(newAccount);
                this.saveAccounts();
            }
            else {
                console.log('Esse CPF já se encontra cadastrado no sistema!');
            }
        }
        else {
            console.log('Você não possui idade suficente para abrir uma conta!');
        }
    }
    getAllAccounts() {
        console.log(accounts);
    }
    getAccountByCpf(cpf) {
        const index = accounts.findIndex((account) => account.getCpf() === cpf);
        console.log(accounts[index]);
        return accounts[index];
    }
    saveAccounts() {
        fileManager.writeObjectToFile(accounts);
    }
}
exports.Bank = Bank;
//# sourceMappingURL=Bank.js.map