const decrementBtn = document.querySelector('[data-action="decrement"]');
const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');

const counter = {
  value: 0,

  decrement() {
    this.value -= 1;
  },

  increment() {
    this.value += 1;
  },
};

decrementBtn.addEventListener('click', () => {
  counter.decrement();
  counterValue.textContent = counter.value;
});

incrementBtn.addEventListener('click', () => {
  counter.increment();
  counterValue.textContent = counter.value;
});
