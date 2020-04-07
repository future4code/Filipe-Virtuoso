export function primeirasLetrasParaMaiusculas(frase) {
  const arr = frase.split(' ');
  let newArr = [];
  arr.map(elem => {
    newArr.push(elem.charAt(0).toUpperCase() + elem.slice(1));
  })

  return newArr.join(' ');
}
