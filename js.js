//                       *****DOM creation*****

//Dom layout: body->maincontainer->displayContainer ->

//body children
let mainContainer = document.createElement("div");
document.body.appendChild(mainContainer);
mainContainer.classList.add("mainContainer");

//mainContainer childeren
let displayContainer = document.createElement("div");
let btnContainer = document.createElement("div");
let numBtnContainer = document.createElement("div");
let operatorBtnContainer = document.createElement("div");
let oneBtn = document.createElement("button");
let twoBtn = document.createElement("button");
let threeBtn = document.createElement("button");
let fourBtn = document.createElement("button");
let fiveBtn = document.createElement("button");
let sixBtn = document.createElement("button");
let sevenBtn = document.createElement("button");
let eightBtn = document.createElement("button");
let nineBtn = document.createElement("button");
let zeroBtn = document.createElement("button");

operatorBtnContainer.classList.add("operatorBtnContainer");
displayContainer.classList.add("displayContainer");
btnContainer.classList.add("btnContainer");
numBtnContainer.classList.add("numBtnContainer");

zeroBtn.textContent = "0";
oneBtn.textContent = "1";
twoBtn.textContent = "2";
threeBtn.textContent = "3";
fourBtn.textContent = "4";
fiveBtn.textContent = "5";
sixBtn.textContent = "6";
sevenBtn.textContent = "7";
eightBtn.textContent = "8";
nineBtn.textContent = "9";

//numBtnContainer children
numBtnContainer.appendChild(zeroBtn);
numBtnContainer.appendChild(oneBtn);
numBtnContainer.appendChild(twoBtn);
numBtnContainer.appendChild(threeBtn);
numBtnContainer.appendChild(fourBtn);
numBtnContainer.appendChild(fiveBtn);
numBtnContainer.appendChild(sixBtn);
numBtnContainer.appendChild(sevenBtn);
numBtnContainer.appendChild(eightBtn);
numBtnContainer.appendChild(nineBtn);

let addBtn = document.createElement("button");
let subBtn = document.createElement("button");
let mulBtn = document.createElement("button");
let divBtn = document.createElement("button");
let equalBtn = document.createElement("button");
let clearBtn = document.createElement("button");

let input = document.createElement("div");
let display = document.createElement("div");

display.style.height = "20px";
display.style.border = "solid";
display.style.borderBottom = "none";
display.style.width = "200px";
display.style.paddingLeft = "5px";
display.style.fontSize = "12px";
input.style.paddingLeft = "5px";
input.style.height = "20px";
input.style.border = "solid";
input.style.borderTop = "none";
input.style.width = "200px";

addBtn.classList.add("addBtn");
subBtn.classList.add("subBtn");
mulBtn.classList.add("mulBtn");
divBtn.classList.add("divBtn");

addBtn.textContent = "+";
subBtn.textContent = "-";
mulBtn.textContent = "*";
divBtn.textContent = "/";
equalBtn.textContent = "=";
clearBtn.textContent = "clear";

//operatorBtnContainer children
operatorBtnContainer.appendChild(equalBtn);
operatorBtnContainer.appendChild(addBtn);
operatorBtnContainer.appendChild(subBtn);
operatorBtnContainer.appendChild(divBtn);
operatorBtnContainer.appendChild(mulBtn);
operatorBtnContainer.appendChild(clearBtn);

//displayContainer children
displayContainer.appendChild(display);
displayContainer.appendChild(input);
//btnContainer children

btnContainer.appendChild(numBtnContainer);
btnContainer.appendChild(operatorBtnContainer);
//mainContainer Children
mainContainer.appendChild(displayContainer);
mainContainer.appendChild(btnContainer);

//           *************js hardcode**************

let process, operator, num1, num2;

num1 = "";
num2 = "";
operator = "";

//functions
function add(n1, n2) {
  return parseInt(n1) + parseInt(n2);
}
function subtract(n1, n2) {
  return parseInt(n1) - parseInt(n2);
}
function multiply(n1, n2) {
  return parseInt(n1) * parseInt(n2);
}
function divide(n1, n2) {
  return parseInt(n1) / parseInt(n2);
}
function clear() {
  num1 = "";
  num2 = "";
  operator = "";
  input.textContent = "";
  display.textContent = "";
}

function operate(op, n1, n2) {
  switch (op) {
    case "+":
      return add(n1, n2);
      break;
    case "-":
      return subtract(n1, n2);
      break;
    case "/":
      return divide(n1, n2);
      break;
    case "*":
      return multiply(n1, n2);
      break;
  }
}
//Event listener for each buttons when clicked
//will grab the number/operator  and set it to coresponding num1,num2 & operator
document.querySelectorAll("button").forEach((e) => {
  e.addEventListener("click", (e) => {
    let getInput = e.target.innerHTML; // returns as string

    //At anytime clear button is clicked, it clears everything from memory.
    if (getInput === "clear") {
      clear();
      return;
    }

    //checks if first input is number
    if (!isNaN(getInput)) {
      //third input logic; num expected
      if (num1 != "" && operator != "") {
        if (num2 == "") {
          num2 = "";
          input.textContent = "";
        }
        num2 += getInput;

        input.textContent += getInput;
        display.textContent += `${getInput}`;
        console.log("num2: " + num2);
      }
      //first input logic; num expected
      if (operator == "") {
        num1 += getInput;
        input.textContent += getInput;
        console.log("num1: " + num1);
      }
    } else {
      //second input logic; operator expected
      if (num1 != "" && num2 == "") {
        operator = getInput;
        display.textContent = `${num1} ${operator} `;
        console.log("operator: " + operator);
      }
      //fourth/final input logic;
      if (num1 != "" && operator != "" && num2 != "") {
        if (getInput === "=") {
          input.textContent = operate(operator, num1, num2);
          display.textContent += ` = ${input.textContent}`;
          console.log("result: " + input.textContent);
          num1 = input.textContent;
          num2 = "";
          operator = "";
        } else {
          input.textContent = operate(operator, num1, num2);
          num1 = input.textContent;
          operator = getInput;
          display.textContent = `${num1} ${operator}`;
          num2 = "";
          console.log(operator);
        }
      }
    }
  });
});
