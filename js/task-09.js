function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColorRef = document.querySelector('.change-color');
const textColorRef = document.querySelector('.color');
const bodyDocumentRef = document.body;

buttonChangeColorRef.addEventListener('click', onBtnChangeColorClick);

function onBtnChangeColorClick(event) {
  textColorRef.textContent = getRandomHexColor();
  bodyDocumentRef.style.backgroundColor = getRandomHexColor();
}
