function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtn = document.querySelector("button.change-color");
const body = document.querySelector("body");
const colorSelect = document.querySelector("span.color");

const changeColor = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  colorSelect.textContent = body.style.backgroundColor;
};

changeBtn.addEventListener("click", changeColor);
