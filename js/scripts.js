function hideResults() {
  document.getElementById("pythonResult").setAttribute("class", "hidden");
  document.getElementById("csharpResult").setAttribute("class", "hidden");
  document.getElementById("javascriptResult").setAttribute("class", "hidden");
  document.getElementById("swiftResult").setAttribute("class", "hidden");
  document.getElementById("errorResult").setAttribute("class", "hidden");
}

function getResult (event) {
  event.preventDefault();
  hideResults();

  const name = document.getElementById("name").value;
  const whatProgram = document.querySelector("input[name='whatProgram']:checked").value;
  const whyProgram = document.querySelector("input[name='whyProgram']:checked").value;
  const oneFear = document.querySelector("input[name='oneFear']:checked").value;
  const hexInput = document.getElementById("colorPick").value;
  document.querySelector("span.nameHere").innerText = name;
  // converts hexadecimal to float
  let convertedHex = hexInput.slice(-5); // removes # from hexadecimal input
  convertedHex = Math.floor(parseInt(convertedHex, 16)) / 1000; // makes converted hex a float value 0-~1500
  convertedHex = parseInt(convertedHex);

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

// calls getResult function when submit button is pressed via Event Listener
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", getResult);
}); 