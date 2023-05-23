const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  let dataFile = {};

  if (email.value.length === 0 || password.value.length === 0) {
    return alert('Все поля должны быть заполнены!');
  }
  dataFile = {
    email: email.value,
    password: password.value,
  };

  console.log(dataFile);
  event.currentTarget.reset();
}
