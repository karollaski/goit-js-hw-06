const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (const ingredient of ingredients) {
  const name = ingredient;
  const elements = document.createElement("li");
  elements.classList.add("item");
  elements.textContent = name;

  const list = document.querySelector("#ingredients");
  list.append(elements);
}
