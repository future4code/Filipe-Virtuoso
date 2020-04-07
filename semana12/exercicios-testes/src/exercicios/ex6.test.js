import { primeirasLetrasParaMaiusculas } from "./ex6";

describe("Ordena array em ordem crescente", () => {
  it("Primeiro teste", () => {
    const teste = "Oi! Sou uma string bem legal para testes!";
    const result = primeirasLetrasParaMaiusculas(teste);
    const validation = 'Oi! Sou Uma String Bem Legal Para Testes!';

    expect(result).toBe(validation);
  });
});
