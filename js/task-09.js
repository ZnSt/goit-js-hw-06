function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(getRandomHexColor());

const refs = {
  span: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
  body: document.body,
};

function handleBtn() {
  const randomColor = getRandomHexColor();
  refs.span.textContent = randomColor;
  refs.body.style.backgroundColor = randomColor;
}

refs.btn.addEventListener("click", handleBtn);
