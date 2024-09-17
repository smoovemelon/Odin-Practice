const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setPoop);

function setPoop() {
  const choice = select.value;

  if (choice === "yes") {
    para.textContent = "Scoop Toro's poop.";
  } else if (choice === "no") {
    para.textContent = "Scoop Toro's poop later.";
  } else {
    para.textContent = "";
  }
}


  

