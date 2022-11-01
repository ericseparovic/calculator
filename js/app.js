const buttons = document.querySelector(".buttons-themes");

buttons.addEventListener("click", changeTheme);

function changeTheme(e) {
  let position = e.target.id;
  const positions = buttons.querySelectorAll(".switch");
  changePositionToggle(position, positions);
}

function changePositionToggle(position, positions) {
  if (position === "" || positions === "") {
    return;
  }

  positions.forEach((element) => {
    console.log(element.id, position);
    if (element.id === position) {
      element.classList.add("active-theme");
    } else {
      element.classList.remove("active-theme");
    }
  });
}
