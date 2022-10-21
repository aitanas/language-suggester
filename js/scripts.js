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
  const oneFear= document.querySelector("input[name='oneFear']:checked").value;
  const hexInput = document.getElementById("colorPick").value;
  // converts hexadecimal to float
  let convertedHex = hexInput.slice(-5); // removes # from hexadecimal input
  convertedHex = Math.floor(parseInt(convertedHex, 16)) / 1000; // makes converted hex a float value 0-~1500
  convertedHex = parseInt(convertedHex);

  document.getElementById("nameHere").innerText = result;

// branching logic
// program: websites, apps, iOS, bees
// whyProgram: genuine lols money confusion
// oneFear: birds, snakes, words
// colors: number thresholds, i.e. >=1000, >9000
if (name && whatProgram && whyProgram && oneFear && convertedHex) {
  if (whatProgram === websites && whyProgram && oneFear === snakes || birds && convertedHex >=500) {
    document.getElementById("javascriptResult").removeAttribute("class");
  } else if (whatProgram === iOs && whyProgram && oneFear === words || snakes && convertedHex <= 1000) {
    document.getElementById("swiftResult").removeAttribute("class");
  } else if (whatProgram === apps && whyProgram && oneFear === snakes && !convertedHex || convertedHex < 500) {
    document.getElementById("csharpResult").removeAttribute("class");
  } else if (whatProgram === apps || bees && whyProgram && oneFear === !snakes && convertedHex ) {
    document.getElementById("javascriptResult").removeAttribute("class");
  }
} else {
  document.getElementById("errorResult").removeAttribute("class");
}
}

window.addEventListener("load", function() {
  document.getElementById("form").addEventListener("submit", getResult);
}); 