import { sorteiaNumero } from './ex3';

describe('Sorteia Número', () => {
  it('Verificar se o número está dentro da faixa informada', () => {
    const min = 1;
    const max = 5;
    const result = sorteiaNumero(1, 5);
    const boolean = result > min && result < max;

    expect(boolean).toBe(true);
  });
});
