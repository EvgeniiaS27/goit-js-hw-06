const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputChange);

function onInputChange(event) {
  const input = event.currentTarget;

  input.value.trim().length === Number(input.dataset.length)
    ? input.classList.remove('invalid') & input.classList.add('valid')
    : input.classList.remove('valid') & input.classList.add('invalid');
}
