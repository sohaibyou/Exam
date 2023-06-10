const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');
const body = document.querySelector('body');
const calc = document.querySelector('.calculator');
const btnCalc = document.querySelector('.btn-calc');
const result = document.querySelector("#result");

btnCalc.addEventListener('click', () => {
    calc.classList.toggle('show');
    body.classList.toggle('active-calculator');
    wrapper.classList.remove('active-popup');
    body.classList.remove('active-popup');
    addEventListener("keydown", keyboardInputHandler);
});

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    calc.classList.remove('show');
    wrapper.classList.add('active-popup');
    body.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    body.classList.remove('active-popup');
    body.classList.remove('active-calculator');
});




const res = document.getElementById("result");
const toast = document.getElementById("toast");

function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 with 0";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
}


// Displays entered value on screen.
function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  if (enteredValue === '+' || enteredValue === '-'|| enteredValue === '*'|| enteredValue === '/') {
    if (res.value.slice(-1) ==='+'||res.value.slice(-1) ==='-'||res.value.slice(-1) ==='*'||res.value.slice(-1) ==='/') return;
    else res.value += enteredValue;
  }else if (enteredValue === ".") {
    if (res.value.includes("."))return;
    else res.value += ".";
  } else res.value += enteredValue;
}

//adding event handler on the document to handle keyboard inputs


//function to handle keyboard inputs
function keyboardInputHandler(e) {
  if (calc.classList.contains('show')) {
  // to fix the default behavior of browser,
  // enter and backspace were causing undesired behavior when some key was already in focus.
  e.preventDefault();
  //grabbing the liveScreen

  //numbers
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  //operators
  if (e.key === "+") {
      if (res.value.slice(-1) ==='+') return;
      else res.value += "+";
  } else if (e.key === "-") {
    if (res.value.slice(-1) ==='-') return;
      else res.value += "-";
  } else if (e.key === "*") {
    if (res.value.slice(-1) ==='*') return;
      else res.value += "*";
  } else if (e.key === "/") {
    if (res.value.slice(-1) ==='/') return;
      else res.value += "/";
  }

  //decimal key
  if (e.key === ".") {
    if (res.value.includes("."))return;
    else res.value += ".";
  }

  //press enter to see result
  if (e.key === "Enter") {
    calculate(result.value);
  }

  //backspace for removing the last input
  if (e.key === "Backspace") {
    const resultInput = res.value;
    //remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}
}
