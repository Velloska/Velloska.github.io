function rollDice(sides, numDice) {
  let result = 0;
  for (let i = 0; i < numDice; i++) {
    result += Math.floor(Math.random() * sides) + 1;
  }
  return result;
}

function displayRoll() {
  let sides = document.getElementById("diceSides").value;
  let numDice = document.getElementById("numDice").value;
  let result = rollDice(sides, numDice);
  document.getElementById("rollResult").innerHTML = "Result: " + result;
}

let widget = document.createElement("div");
widget.style.position = "fixed";
widget.style.top = "50%";
widget.style.right = "0";
widget.style.transform = "translateY(-50%)";
widget.style.backgroundColor = "#fff";
widget.style.padding = "10px";
widget.style.border = "2px solid #000";
widget.innerHTML = `
  <h2>Dice Roller Widget</h2>
  <label for="diceSides">Dice Sides:</label>
  <input type="number" id="diceSides" min="1" max="100"><br>
  <label for="numDice">Number of Dice:</label>
  <input type="number" id="numDice" min="1" max="100"><br>
  <button onclick="displayRoll()">Roll</button>
  <p id="rollResult"></p>
`;

document.body.appendChild(widget);
