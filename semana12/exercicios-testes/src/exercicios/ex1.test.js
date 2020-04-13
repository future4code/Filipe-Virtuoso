import { anoBissexto } from './ex1';

describe('Ano bissexto', () => {
  it('Verifica se o ano passado é multiplo de 4, 100 e 400', () => {
    const ano = 1600;
    const result = anoBissexto(ano);
    expect(result).toBe(true);
  });
});
