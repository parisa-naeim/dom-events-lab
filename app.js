/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");
let firstNumber;
let secondNumber;
let operatorAction;

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector(".display");

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const clicked = event.target.innerText;
    // This log is for testing purposes to verify we're getting the correct value
    // console.log(event.target.innerText);
    // Future logic to capture the button's value would go here...

    if (clicked === "C") {
      clear();
    }

    if (!isNaN(clicked)) {
      numberClicked(clicked);
    } else {
      operatorClicked(clicked);
    }
  });
});

/*-------------------------------- Functions --------------------------------*/

const numberClicked = (num) => {
  display.innerHTML = num;
  if (!firstNumber) {
    firstNumber = num;
  } else {
    secondNumber = num;
  }
};

const operatorClicked = (operator) => {
  if (!operatorAction) {
    operatorAction = operator;
  } else {
    const result = doOperation(operatorAction, firstNumber, secondNumber);
    display.innerHTML = result;
    secondNumber = undefined;
    firstNumber = result;
    operatorAction = undefined;
  }
};

const doOperation = (operation, first, second) => {
  if (operation === "+") {
    return parseInt(first) + parseInt(second);
  } else if (operation === "-") {
    return first - second;
  } else if (operation === "*") {
    return first * second;
  } else if (operation === "/") {
    return first / second;
  } else if (operation === "=") {
    return first;
  } else {
    console.log("error");
  }
};

const clear = () => {
  firstNumber = undefined;
  secondNumber = undefined;
  operatorAction = undefined;
  display.innerHTML = "";
};
