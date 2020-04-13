export function checaPalindromo(frase) {
  const reversedString = frase.toLowerCase().replace(/ /g, '').split('');
  const fraseFinal = reversedString.reverse().join('');
  if (reversedString.join('') === fraseFinal) {
    return true;
  }

  return false;
}
