import { Place } from './abstract/Place';

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number,

    cep: string
  ) {
    super(cep);
  }
}
