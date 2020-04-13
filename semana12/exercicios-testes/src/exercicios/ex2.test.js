import { checaPalindromo } from './ex2';

describe('Checa Palíndromo', () => {
  it('Se a palavra ou frase é um palíndromo', () => {
    const palavra = 'Socorram-me, subi no ônibus em Marrocos';
    const result = checaPalindromo(palavra);

    expect(result).toBe(true);
  });
});
