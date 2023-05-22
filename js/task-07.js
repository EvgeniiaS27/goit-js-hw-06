const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

console.dir(inputRef.min);

inputRef.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;

  console.log(event.currentTarget.value);
}
