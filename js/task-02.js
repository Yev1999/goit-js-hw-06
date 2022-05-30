const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


function addElements() {
  let children = [];
  ingredients.map(ingradient => {
    const liElement = document.createElement("li");
    liElement.innerText = `${ingradient}`;
    liElement.classList.add("item");
    
    children.push(liElement);
  })
    const list = document.querySelector('#ingredients');
    list.append(...children);
}
addElements();
