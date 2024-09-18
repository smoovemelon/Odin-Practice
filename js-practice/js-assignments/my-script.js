<<<<<<< HEAD
/* 
const select = document.querySelector("select");
=======
const select = document.querySelector("#emotion");
>>>>>>> 8de45cea0dd83a6ca9cb8b2ec114448d1bb2d318
const para = document.querySelector("p");

select.addEventListener("change", setPoop);

function setPoop() {
  const choice = select.value;
<<<<<<< HEAD

  if (choice === "yes") {
    para.textContent = "Scoop Toro's poop.";
  } else if (choice === "no") {
    para.textContent = "Scoop Toro's poop later.";
  } else {
    para.textContent = "";
  }
}
 */

/* 
let age = prompt("What is your age?");

if (age > 18) {
  alert("Wow you're old!");
  alert("Get a cane!");
} else if (age == 18) {
  alert("Sheesh, you're barely there!")
} else {
  alert("You're still a child!")
  alert("Get out of here!")
}
 */

/* 
let age = prompt('age?');

let message = (age < 3) ? "You're a baby!":
(age < 18) ? "Hello!":
(age < 100) ? "Greetings!":
"Wow! You're old!"

alert(message);
 */

/* 
let lbs = prompt
("How much do you weigh? Just include the number!");

let message = (lbs < 85) ? "You're really light!":
  lbs < 120 ? "You're pretty average.":
  lbs < 180 ? "You're on the bulkier side.":
  lbs < 240 ? "You're a fatty!":
  "I think you need to lose A LOT of weight...";

alert(message);
 */

/* 
let official = prompt("What is the 'official' name of JavaScript?");
let output;

if (official == "ECMAScript") {
  output = "Right!";
} else {
  output = "You don't know? ECMAScript!";
}

alert(output);
 */

/* 
let value = prompt("Type a number.");

if (value > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
}
 */

/* let result = (a + b < 4) ? "below" : "over"; */

/* 
let message = (login == "Employee") ? "Hello" :
  (login == "Director") ? "Greetings" :
  (login == "") ? "No login" :
  "";
   */

/* 
let browser = prompt("What browser do you use?");

if (browser == "Edge") {
  alert("You've got the edge!");
} else if (browser == "Chrome"
  || "Firefox"
  || "Safari"
  || "Opera") {
    alert ("Okay we support these browsers too");
  } else {
    alert("We hope this page looks ok!");
  }
 */

/* 
let a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert("2,3");
    break;
}
 */
=======

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
}
/* 
    let days = 31;
    if (choice === February) {
        days = 28;
    } else if (
        choice === "April" ||
        choice === "June" ||
        choice ==="September" ||
        choice === "November"
    ) {
        days = 30;
    }
*/
>>>>>>> 8de45cea0dd83a6ca9cb8b2ec114448d1bb2d318
