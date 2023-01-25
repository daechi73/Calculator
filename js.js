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
