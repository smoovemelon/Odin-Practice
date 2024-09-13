const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setEmotion);

function setEmotion() {
  const choice = select.value;
}

if (choice === "happy") {
    para.textContent = "Comedy";
} else if (choice === "sad") {
    para.textContent = "Drama";
} else if (choice === "angry") {
    para.textContent = "Action"; 
} else if (choice === "fear") {
    para.textContent = "Horror"; 
} else {
    para.textContent = "";
}