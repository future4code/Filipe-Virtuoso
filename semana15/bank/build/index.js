"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bank_1 = require("./Bank");
const operation = process.argv[5];
const cpf = process.argv[6];
const name = process.argv[7];
const birth = process.argv[8];
const value = Number(process.argv[8]);
const bank = new Bank_1.Bank();
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
//# sourceMappingURL=index.js.map