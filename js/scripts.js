

// BRANCHING
// program: websites, apps, iOS, bees
// oneFear: birds, snakes, words
// colors: hexadecimal code stuff?? RNG? convert hex code to integer, number thresholds? >=1000, >9000
function getResult (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const whatProgram = document.querySelector("input[name='whatProgram']:checked").value;
  const whyProgram = document.querySelector("input[name='whyProgram']:checked").value;
  const oneFear= document.querySelector("input[name='oneFear']:checked").value;
  const hexInput = document.getElementById("colorPick").value;

  // converts hexadecimal to float
  function convertHex (hexInput) {
  let convertedHex = hexInput.slice(-5);
  convertedHex = Math.floor(parseInt(convertedHex, 16)) / 1000;
  return convertedHex
  }

  document.getElementById("nameHere").innerText = result;


  window.addEventListener("load", function() {
    document.getElementById("form").addEventListener("submit", getLength);
  });
}