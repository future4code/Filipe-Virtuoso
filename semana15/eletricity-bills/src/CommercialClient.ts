import { Commerce } from './Commerce';

import { Client } from './interfaces/Client';

export class CommercialClient extends Commerce implements Client {
  constructor(
    private cnpj: string,
    floorsQuantity: number,
    cep: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number
  ) {
    super(floorsQuantity, cep);
  }

  getCnpj() {
    return this.cnpj;
  }

  calculateBill() {
    return this.consumedEnergy * 0.53;
  }
}
