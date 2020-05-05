import { Residence } from './Residence';
import { Client } from './interfaces/Client';

export class ResidentialClient extends Residence implements Client {
  constructor(
    private cpf: string,
    residentsQuantity: number,
    cep: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number
  ) {
    super(residentsQuantity, cep);
  }

  getCpf() {
    return this.cpf;
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}
