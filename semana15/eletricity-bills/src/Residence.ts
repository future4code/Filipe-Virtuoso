import { Place } from './abstract/Place';

export class Residence extends Place {
  constructor(protected residentsQuantity: number, cep: string) {
    super(cep);
  }
}
