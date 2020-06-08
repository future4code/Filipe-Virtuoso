import { Place } from './abstract/Place';

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,

    cep: string
  ) {
    super(cep);
  }
}