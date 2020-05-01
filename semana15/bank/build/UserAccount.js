"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class UserAccount {
    constructor(cpf, name, birth) {
        this.balance = 0;
        this.cpf = cpf;
        this.name = name;
        this.age = moment().diff(moment(birth, 'DD/MM/YYYY'), 'years');
        this.birth = birth;
        this.transactions = [];
    }
    getCpf() {
        return this.cpf;
    }
    getBalance() {
        console.log(`Saldo: ${this.balance}`);
    }
    addBalance(balance) {
        this.balance += balance;
    }
}
exports.UserAccount = UserAccount;
//# sourceMappingURL=UserAccount.js.map