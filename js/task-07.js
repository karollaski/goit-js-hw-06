const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const setFontSize = (event) => {
  text.style.fontSize = `${event.target.value}px`;
};

fontSizeControl.addEventListener("change", setFontSize);
