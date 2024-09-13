/* if...else statements 

let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}

*/

const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setEmotion);

function setEmotion() {
  const choice = select.value;
}

if (choice === "happy"); {
  para.textContent = "Comedy";
} else if (choice === "sad"); {
  para.textContent = "Drama";
} else if (choice === "fear"); {
  para.textContent = "Horror"; 
} else if (choice === "anger"); {
  para.textContent = "Action";
} else {
  para.textContent = "";
  }
