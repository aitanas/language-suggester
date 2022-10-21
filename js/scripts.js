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
  // converts hexadecimal to float
  let convertedHex = hexInput.slice(-5); // removes # from hexadecimal input
  convertedHex = Math.floor(parseInt(convertedHex, 16)) / 1000; // makes converted hex a float value 0-~1500
  convertedHex = parseInt(convertedHex);

  let nameResult; 

// branching logic
// program: websites, apps, iOS, bees
// whyProgram: genuine lols money confusion
// oneFear: birds, snakes, words
// colors: number thresholds, i.e. >=1000, >9000
if (name && whatProgram && whyProgram && oneFear && convertedHex) {
  if (whatProgram === webpages || bees && whyProgram && oneFear === snakes || birds) {
    document.getElementById("javascriptResult").removeAttribute("class");
    nameResult = name;
  } else if (whatProgram === iOS && whyProgram && oneFear === words || snakes) {
    document.getElementById("swiftResult").removeAttribute("class");
    nameResult = name;
  } else if (whatProgram === apps || bees && whyProgram && oneFear === snakes) {
    document.getElementById("csharpResult").removeAttribute("class");
    nameResult = name;
  } else if (whatProgram === apps || bees && whyProgram && oneFear != snakes) {
    document.getElementById("pythonResult").removeAttribute("class");
    nameResult = name;
  }
} else {
  document.getElementById("errorResult").removeAttribute("class");
}
  document.getElementById("nameHere").innerText = nameResult;
}

window.addEventListener("load", function() {
  document.getElementById("form").addEventListener("submit", getResult);
}); 