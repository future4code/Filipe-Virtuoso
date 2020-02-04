const addTodo = () => {
  const description = document.getElementById("action-info").value;
  const day = document.getElementById("diaDaSemana").value;


  switch(day) {
    case "segunda":
      document.getElementById("monday-list").innerHTML += "<li>" + description + "</li>";
      break;
    case "terca":
      document.getElementById("tuesday-list").innerHTML += "<li>" + description + "</li>";
      break;
    case "quarta":
      document.getElementById("wed-list").innerHTML += "<li>" + description + "</li>";
      break;
    case "quinta":
      document.getElementById("thursday-list").innerHTML += "<li>" + description + "</li>";
      break;
    case "sexta":
      document.getElementById("friday-list").innerHTML += "<li>" + description + "</li>";
      break;
    case "sabado":
      document.getElementById("saturday-list").innerHTML += "<li>" + description + "</li>";
      break;
    case "domingo":
      document.getElementById("sunday-list").innerHTML += "<li>" + description + "</li>";
      break;
  }

}