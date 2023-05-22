const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsRef = document.querySelector('#ingredients');
console.log(listIngredientsRef);

const ingredientItem = ingredients.map(element => {
  const ingredientRef = document.createElement('li');
  ingredientRef.classList.add('item');
  ingredientRef.textContent = `${element}`;

  return ingredientRef;
});

listIngredientsRef.append(...ingredientItem);
