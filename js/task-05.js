const textInput = document.querySelector("#name-input");
const name = document.querySelector("#name-output");

const getName = (event) => {
  name.textContent = event.target.value;

  if (event.target.value === "") {
    name.textContent = "Anonymous";
  }
};

textInput.addEventListener("input", getName);
