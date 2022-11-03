const buttons = document.querySelector(".switch");
const display = document.querySelector(".display");
const keyboard = document.querySelector(".keyboard");

buttons.addEventListener("click", changeTheme);
keyboard.addEventListener("click", getValue);

function changeTheme(e) {
  let position = e.target.id;
  const positions = buttons.querySelectorAll(".switch-circule");
  const body = document.querySelector("body");
  changePositionSwitch(position, positions);
  changeColorsTheme(position, body);
}

function changePositionSwitch(position, positions) {
  if (position === "" || positions === "") {
    return;
  }

  positions.forEach((element) => {
    if (element.id === position) {
      element.classList.add("active-theme");
    } else {
      element.classList.remove("active-theme");
    }
  });
}

function changeColorsTheme(position, body) {
  // Theme 1
  if (position === "1") {
    body.classList.remove("theme2", "theme3");
  }

  // Theme 2
  if (position === "2") {
    body.classList.add("theme2");
    body.classList.remove("theme3");
  }

  // Theme 3
  if (position === "3") {
    body.classList.add("theme3");
    body.classList.remove("theme2");
  }
}

function getValue(e) {
  console.log(e.target.id);
}
