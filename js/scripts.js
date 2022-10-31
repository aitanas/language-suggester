function hideResults() {
  document.getElementById("pythonResult").setAttribute("class", "hidden");
  document.getElementById("csharpResult").setAttribute("class", "hidden");
  document.getElementById("javascriptResult").setAttribute("class", "hidden");
  document.getElementById("swiftResult").setAttribute("class", "hidden");
  document.getElementById("errorResult").setAttribute("class", "hidden");
}

function getResult(event) {
  event.preventDefault();
  hideResults();

  const name = document.getElementById("name").value;
  const whatProgram = document.querySelector("input[name='whatProgram']:checked").value;
  const oneFear = document.querySelector("input[name='oneFear']:checked").value;
  document.querySelectorAll("span.nameHere").innerText = name;

  // branching logic
  if ((whatProgram === "apps" || whatProgram === "bees") && oneFear != "snakes" && name) {
    document.getElementById("pythonResult").removeAttribute("class");
  } else if (whatProgram === "webpages" && oneFear != "words" && name) {
    document.getElementById("javascriptResult").removeAttribute("class");
  } else if ((whatProgram === "iOS" || whatProgram === "webpages") && oneFear != "birds" && name) {
    document.getElementById("swiftResult").removeAttribute("class");
  } else if (whatProgram === "bees" || whatProgram === "apps" || whatProgram === "iOS" && name) {
    document.getElementById("csharpResult").removeAttribute("class");
  } else if (!name) {
    document.getElementById("errorResult").removeAttribute("class");
  }
}

// calls getResult function when submit button is clicked (via Event Listener)
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", getResult);
}); 