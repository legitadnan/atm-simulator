let pin = "1234";
let input = "";
let balance = 10000;
let state = "pin";

const display = document.getElementById("display");
const screen = document.getElementById("screen");

function press(num) {
  input += num;
  update();
}

function clearInput() {
  input = "";
  update();
}

function enter() {
  if (state === "pin") {
    if (input === pin) {
      state = "menu";
      showMenu();
    } else {
      display.innerText = "❌ Wrong PIN";
    }
    input = "";
  }

  else if (state === "withdraw") {
    let amt = parseInt(input);
    if (amt <= balance) {
      balance -= amt;
      display.innerText = "₹" + amt + " Withdrawn";
    } else {
      display.innerText = "Insufficient Balance";
    }
    state = "menu";
    input = "";
    setTimeout(showMenu, 1500);
  }

  else if (state === "deposit") {
    let amt = parseInt(input);
    balance += amt;
    display.innerText = "₹" + amt + " Deposited";
    state = "menu";
    input = "";
    setTimeout(showMenu, 1500);
  }
}

function showMenu() {
  screen.innerHTML = `
    <h2>MAIN MENU</h2>
    <p>1 ▶ Balance</p>
    <p>2 ▶ Withdraw</p>
    <p>3 ▶ Deposit</p>
    <p>4 ▶ Exit</p>
  `;
}

function menuSelect(option) {
  if (state !== "menu") return;

  if (option === 1) {
    display.innerText = "Balance: ₹" + balance;
  }
  else if (option === 2) {
    state = "withdraw";
    display.innerText = "Enter Amount";
  }
  else if (option === 3) {
    state = "deposit";
    display.innerText = "Enter Amount";
  }
  else if (option === 4) {
    state = "pin";
    screen.innerHTML = "<h2>ENTER PIN</h2><p id='display'></p>";
  }
}

function update() {
  display.innerText = input;
}
