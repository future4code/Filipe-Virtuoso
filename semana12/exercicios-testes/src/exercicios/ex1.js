export function anoBissexto(ano) {
  if (ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0) {
    console.log('hello');
    return true;
  }
  return false;
}
