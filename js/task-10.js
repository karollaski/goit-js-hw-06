function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValue = document.querySelector("#controls>input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  let addItem = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.height = `${30 + 10 * i}px`;
    box.style.width = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    addItem.push(box);
  }
  return addItem;
};

const toAddBoxes = () => {
  let newBoxes = createBoxes(inputValue.value);
  boxes.append(...newBoxes);
};

const destroyeBoxes = () => (boxes.innerHTML = "");

btnCreate.addEventListener("click", toAddBoxes);
btnDestroy.addEventListener("click", destroyeBoxes);
