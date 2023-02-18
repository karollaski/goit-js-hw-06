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
  console.log(elements);
  elements.classList.add("item");
  console.log(elements);
  elements.textContent = name;
  console.log(elements);

  const list = document.querySelector("#ingredients");
  list.append(elements);
}
