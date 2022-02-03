function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  firstBtn: document.querySelector("button[data-create]"),
  secondBtn: document.querySelector("button[data-destroy]"),
  input: document.querySelector('[type="number"]'),
  div: document.querySelector("#boxes"),
};

const onCreate = () => {
  const amount = Number(refs.input.value);
  createBoxes(amount);
};

refs.firstBtn.addEventListener("click", onCreate);

function createBoxes(amount) {
  const array = [];
  let number = 30;

  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${number}px`;
    newDiv.style.height = `${number}px`;
    number += 10;
    array.push(newDiv);
  }
  refs.div.append(...array);
}

function destroyBoxes() {
  refs.div.innerHTML = "";
}

refs.secondBtn.addEventListener("click", destroyBoxes);
