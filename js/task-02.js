const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function addElements() {
  ingredients.map(ingradient => {
    const liElement = document.createElement("li");
    liElement.innerText = `${ingradient}`;
    liElement.classList.add("item");
    const list = document.querySelector('#ingredients');
    list.appendChild(liElement);
  })
}
addElements();
