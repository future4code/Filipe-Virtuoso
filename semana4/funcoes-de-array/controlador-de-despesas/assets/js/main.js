class Expense {
  constructor(type, value, description) {
    this.type = type;
    this.value = value;
    this.description = description;
  }
}
const expenses = [];
const totalExpenses = 0;

const addExpense = () => {
  const type = document.getElementById("tipoGasto").value;
  const value = document.getElementById("value").value;
  const description = document.getElementById("description").value;

  expenses.push(new Expense(type, value, description));

  listExpenses();
};

const listExpenses = () => {
  document.getElementById("list-table").innerHTML =
    "<table id='list-table'><tr><th>Tipo</th><th>Valor</th><th>Descrição</th></tr></table></section>";
  for (i = expenses.length - 1; i >= 0; i--) {
    console.log(expenses[i].type);
    document.getElementById("list-table").innerHTML +=
      "<tr><td>" +
      expenses[i].type +
      "</td>" +
      "<td><span>R$</span> " +
      expenses[i].value +
      "</td>" +
      "<td>" +
      expenses[i].description +
      "</td></tr>";
  }
};
