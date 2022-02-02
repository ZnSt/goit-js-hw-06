const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

const handelInput = () => {
  console.log("input");
  const userMessage = refs.input.value;
  refs.output.textContent = userMessage;
  if (!userMessage) {
    refs.output.textContent = "Anonymous";
  }
};
refs.input.addEventListener("input", handelInput);
