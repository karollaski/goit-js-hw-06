let counterValue = 0;

const displayCounter = document.querySelector("#value");
const btnMinus = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const btnPlus = document.querySelector(
  '#counter button[data-action="increment"]'
);

const minusClick = () => {
  counterValue--;
  displayCounter.textContent = counterValue;
};

const plusClick = () => {
  counterValue++;
  displayCounter.textContent = counterValue;
};

btnMinus.addEventListener("click", minusClick);
btnPlus.addEventListener("click", plusClick);
