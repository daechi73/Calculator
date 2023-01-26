//                       *****DOM creation*****

//Dom layout: body->maincontainer->displayContainer
//
//                               ->btnContainer
//

//body children
let mainContainer = document.createElement("div");
document.body.appendChild(mainContainer);
mainContainer.classList.add("mainContainer");

//mainContainer childeren
let displayContainer = document.createElement("div");
let btnContainer = document.createElement("div");
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

displayContainer.classList.add("displayContainer");
btnContainer.classList.add("btnContainer");

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

// zeroBtn.style.height = "50px";
// zeroBtn.style.width = "50px";
// oneBtn.style.height = "50px";
// oneBtn.style.width = "50px";
// twoBtn.style.height = "50px";
// twoBtn.style.width = "50px";
// threeBtn.style.height = "50px";
// threeBtn.style.width = "50px";
// fourBtn.style.height = "50px";
// fourBtn.style.width = "50px";
// fiveBtn.style.height = "50px";
// fiveBtn.style.width = "50px";
// sixBtn.style.width

// btnContainer.appendChild(zeroBtn);
// btnContainer.appendChild(oneBtn);
// btnContainer.appendChild(twoBtn);
// btnContainer.appendChild(threeBtn);
// btnContainer.appendChild(fourBtn);
// btnContainer.appendChild(fiveBtn);
// btnContainer.appendChild(sixBtn);
// btnContainer.appendChild(sevenBtn);
// btnContainer.appendChild(eightBtn);
// btnContainer.appendChild(nineBtn);

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

//btnContainer children
let rowOne = document.createElement("div");
let rowTwo = document.createElement("div");
let rowThree = document.createElement("div");
let rowFour = document.createElement("div");
let rowFive = document.createElement("div");

rowOne.appendChild(clearBtn);
rowTwo.appendChild(addBtn);
rowTwo.appendChild(oneBtn);
rowTwo.appendChild(twoBtn);
rowTwo.appendChild(threeBtn);
rowThree.appendChild(subBtn);
rowThree.appendChild(fourBtn);
rowThree.appendChild(fiveBtn);
rowThree.appendChild(sixBtn);
rowFour.appendChild(mulBtn);
rowFour.appendChild(sevenBtn);
rowFour.appendChild(eightBtn);
rowFour.appendChild(nineBtn);
rowFive.appendChild(divBtn);
rowFive.appendChild(zeroBtn);
rowFive.appendChild(equalBtn);

btnContainer.appendChild(rowOne);
btnContainer.appendChild(rowTwo);
btnContainer.appendChild(rowThree);
btnContainer.appendChild(rowFour);
btnContainer.appendChild(rowFive);

//displayContainer children
displayContainer.appendChild(display);
displayContainer.appendChild(input);

//mainContainer Children
mainContainer.appendChild(displayContainer);
mainContainer.appendChild(btnContainer);

//css

mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "column";

let btns = document.querySelectorAll("button");

btns.forEach((e) => {
  e.style.width = "50px";
  e.style.height = "50px";
  if (e.textContent === "=" || e.textContent === "clear") {
    clearBtn.style.width = "100px";
    equalBtn.style.width = "100px";
  }
});

//        *************js hardcode**************

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
