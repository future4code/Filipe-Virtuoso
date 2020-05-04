import { Industry } from './Industry';
import { Client } from './interfaces/Client';

export class InsdustrialClient extends Industry implements Client {
  constructor(
    private cnpj: string,
    machinesQuantity: number,
    cep: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number
  ) {
    super(machinesQuantity, cep);
  }

  getCnpj() {
    return this.cnpj;
  }
  calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}
