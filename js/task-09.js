function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector("button.change-color");
const body = document.querySelector("body");
const colorSelect = document.querySelector("span.color");

const changeColor = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  colorSelect.textContent = getRandomHexColor();
};

changeBtn.addEventListener("click", changeColor);
