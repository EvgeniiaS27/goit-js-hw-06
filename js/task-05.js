const inputRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputName);

function onInputName(event) {
  nameLabelRef.textContent = event.currentTarget.value;
  if (nameLabelRef.textContent.length === 0) {
    nameLabelRef.textContent = 'Anonymous';
  }
}
