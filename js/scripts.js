

// BRANCHING
// program: websites, apps, iOS, bees
// oneFear: birds, snakes, words
// colors: hexadecimal code stuff?? RNG? convert hex code to integer, number thresholds? >=1000, >9000
const hexInput = document.getElementById("colorPick").value;

// converts hexadecimal to float
function convertHex (hexInput) {
let convertedHex = hexInput.slice(-5);
convertedHex = Math.floor(parseInt(convertedHex, 16)) / 1000;
return convertedHex
}