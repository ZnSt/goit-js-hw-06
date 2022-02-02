let counterValue = 0;

const refs = {
  firstBtn: document.querySelector('button[data-action="decrement"]'),
  span: document.querySelector("#value"),
  secondBtn: document.querySelector('button[data-action="increment"]'),
};

refs.firstBtn.addEventListener("click", () => {
  counterValue -= 1;
  refs.span.textContent = counterValue;
});

refs.secondBtn.addEventListener("click", () => {
  counterValue += 1;
  refs.span.textContent = counterValue;
});

// console.log(refs.firstBtn.dataset.action);
// console.log(refs.secondBtn.dataset.action);
