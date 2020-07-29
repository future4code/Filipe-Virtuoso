class Expense {
  constructor(type, value, description) {
    this.type = type;
    this.value = value;
    this.description = description;
  }
}
const expenses = [];
let totalExpenses = 0;

const addExpense = () => {
  const type = document.getElementById("tipoGasto").value;
  const value = document.getElementById("value").value;
  const description = document.getElementById("description").value;

  if (value && description) {
    expenses.push(new Expense(type, value, description));
    document.getElementById("value").value = "";
    document.getElementById("description").value = "";

    listExpenses();
    generateExtract();
  } else {
    alert("Preencha todos os campos obrigatórios!");
  }
};

const listExpenses = () => {
  document.getElementById("list-table").innerHTML =
    "<table id='list-table'><tr><th>Tipo</th><th>Valor</th><th>Descrição</th></tr></table></section>";
  for (i = expenses.length - 1; i >= 0; i--) {
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

const generateExtract = () => {
  document.getElementById("extract").innerHTML = "";
  totalExpenses = 0;
  for (i = 0; i < expenses.length; i++) {
    totalExpenses += parseInt(expenses[i].value);
    document.getElementById("extract").innerHTML +=
      "<ul>" + "<li><span>R$</span> " + expenses[i].value + "</li>";
    ("</ul>");
  }
  document.getElementById("extract").innerHTML +=
    "<h4>Valor total: R$ " + totalExpenses + "</h4>";
};

const filterExpenses = () => {
  let type = document.getElementById("tipoGastoFilter").value;
  let minValue = parseInt(document.getElementById("minValue").value);
  let maxValue = parseInt(document.getElementById("maxValue").value);

  if (minValue && maxValue) {
    document.getElementById("list-table").innerHTML =
      "<table id='list-table'><tr><th>Tipo</th><th>Valor</th><th>Descrição</th></tr></table></section>";

    const filtered = expenses.filter(element => {
      return (
        element.value >= minValue &&
        element.value <= maxValue &&
        element.type === type
      );
    });

    for (i = 0; i < filtered.length; i++) {
      document.getElementById("list-table").innerHTML +=
        "<tr><td>" +
        filtered[i].type +
        "</td>" +
        "<td><span>R$</span> " +
        filtered[i].value +
        "</td>" +
        "<td>" +
        filtered[i].description +
        "</td></tr>";
    }
  } else {
    alert("Preencha todos os campos obrigatórios!");
  }

  document.getElementById("minValue").value = "";
  document.getElementById("maxValue").value = "";
};
