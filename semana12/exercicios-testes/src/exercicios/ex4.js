export function removeItensDuplicados(array) {
  let items;
  items = array.filter((elem, index) => { return array.indexOf(elem) === index });


  return items;

}
