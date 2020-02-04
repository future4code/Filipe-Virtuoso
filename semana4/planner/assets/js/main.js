const addTodo = () => {
  const description = document.getElementById("action-info").value;
  const day = document.getElementById("diaDaSemana").value;

  if(description) {
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
  } else {
    alert("Digite uma mensagem válida");
  }
  document.getElementById("action-info").value = '';
}

const clearTodo = () => {
  const lists = document.querySelectorAll('.item-list')
  for(let i = 0; i < lists.length; i++) {
    console.log("HELLO");
    lists[i].innerHTML = '';
  }
}


const lists = document.querySelectorAll('.item-list');
for(let i = 0; i < lists.length; i++) {
  lists[i].addEventListener("click", function(e) {
    if(e.target.tagName === 'LI') {
      e.target.style.textDecoration = "line-through";
      e.target.style.color = "red";
    }
  });
}