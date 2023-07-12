  let targetNumber = 18;

  function verifyage() {
    let inputNumber= document.getElementById("inputNumber").value;

    console.log(inputNumber)
  if (inputNumber > targetNumber) {
    document.getElementById("result").textContent = "You are eligible to vote!";
  } else {
    document.getElementById("result").textContent = "You are too young to vote!";
  }
}

let score = 75;

function assignGrade() {
  let inputNumber1 = document.getElementById("inputNumber1").value;

  console.log("inputNumber1")

  if (inputNumber1 > 90) {
    document.getElementById("result1").textContent = "Grade A";
  } else if (inputNumber1 > 80) {
    document.getElementById("result1").textContent = "Grade B";
  } else if (inputNumber1 > 70) {
    document.getElementById("result1").textContent = "Grade C";
  } else if (inputNumber1 > 60) {
    document.getElementById("result1").textContent = "Grade D";
  } else{
    document.getElementById("result1").textContent = "Grade F";
  }
}


let isVacationTime = true;

function planVacation() {
  if (isVacationTime) {
    console.log("Enjoy your vacation!");
  } else {
    console.log("Hang in there, vacation time is coming!");
  }
}
planVacation();

let favoriteColors = ['blue', 'green', 'red', 'yellow'];

function displayColors() {
  for (let i = 0; i < favoriteColors.length; i++) {
    console.log(favoriteColors[i]);
  }
}

displayColors();



for (let i = 10; i >= 1; i--) {
  console.log(i);
}







