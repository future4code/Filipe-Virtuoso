"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const UserAccount_1 = require("./UserAccount");
class JSONFileManager {
    constructor(fileName) {
        this.fileName = fileName;
    }
    writeObjectToFile(objectToSave) {
        fs.writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 2));
    }
    getObjectFromFile() {
        const accountsJson = JSON.parse(fs.readFileSync(this.fileName).toString());
        console.log(accountsJson);
        const accounts = [];
        accountsJson.forEach((account) => {
            accounts.push(new UserAccount_1.UserAccount(account.cpf, account.name, account.birth));
        });
        return accounts;
    }
}
exports.JSONFileManager = JSONFileManager;
//# sourceMappingURL=JSONFileManager.js.map