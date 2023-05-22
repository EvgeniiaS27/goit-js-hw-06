function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const containerCreateRef = document.querySelector('#controls');
const inputNumberRef = containerCreateRef.firstElementChild;
const buttonCreateRef = document.querySelector('[data-create]');
const buttonDestroyRef = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('.boxes');

function createBoxes(amount) {
  let boxes = [];
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add('js-box');

    width += 10;
    height += 10;

    boxes.push(box);
  }
  containerCreateRef.append(...boxes);
}

buttonCreateRef.addEventListener('click', () => {
  createBoxes(inputNumberRef.value);
});

buttonDestroyRef.addEventListener('click', () => {
  const arrayBoxes = document.querySelectorAll('.js-box');

  arrayBoxes.forEach(element => {
    element.remove();
  });
  inputNumberRef.value = '';
});
