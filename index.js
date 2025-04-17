const display = document.querySelector(".display");
let operator = "";
let firstNumber = "";
let secondNumber = "";
let result = "";
function displayText(value) {
  display.textContent = value;
}
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    var value = e.target.id.replace("btn-", "");

    if (!isNaN(value)) {
      if (operator === "") {
        firstNumber += value;
        displayText(firstNumber);
      } else {
        secondNumber += value;
        displayText(secondNumber);
      }
    } else if (value === "clear") {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      displayText("");
    } else if (
      ["add", "divide", "subtract", "multiply", "equals"].includes(value)
    ) {
      if (secondNumber !== "") {
        switch (operator) {
          case "add":
            add();
            break;
          case "subtract":
            subtract();
            break;
          case "multiply":
            multiply();
            break;
          case "divide":
            divide();
            break;
        }
      }
      if (firstNumber !== "" && value !== "equals") {
        operator = value;
      }
    } else if (value == "negate") {
      if (secondNumber !== "") {
        secondNumber = -secondNumber;
        console.log(firstNumber);

        displayText(secondNumber);
      } else if (firstNumber !== "") {
        firstNumber = -firstNumber;
        console.log(firstNumber);
        displayText(firstNumber);
      }
    } else if (value == "decimal") {
      if (secondNumber !== "" && !secondNumber.includes(".")) {
        secondNumber += ".";
        displayText(secondNumber);
      } else if (firstNumber !== "" && !firstNumber.includes(".")) {
        firstNumber += ".";
        displayText(firstNumber);
      }
    } else if (value == "delete") {
      if (secondNumber !== "") {
        secondNumber = secondNumber.slice(0, secondNumber.length - 1);
        displayText(secondNumber);
      } else if (firstNumber !== "") {
        firstNumber = firstNumber.slice(0, firstNumber.length - 1);
        displayText(firstNumber);
      }
    }
  });

  function add() {
    result = parseFloat(firstNumber) + parseFloat(secondNumber);
    displayText(result);
    firstNumber = result;
    secondNumber = "";
  }

  function subtract() {
    result = parseFloat(firstNumber) - parseFloat(secondNumber);
    displayText(result);
    firstNumber = result;
    secondNumber = "";
  }

  function multiply() {
    result = parseFloat(firstNumber) * parseFloat(secondNumber);
    displayText(result);
    firstNumber = result;
    secondNumber = "";
  }

  function divide() {
    if (secondNumber == 0) {
      displayText("Err!");
      firstNumber = "";
      secondNumber = "";
      operator = "";
    } else {
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      displayText(result);
      firstNumber = result;
      secondNumber = "";
    }
  }
});
