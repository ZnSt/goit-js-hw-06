const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};
console.log(refs.input, refs.span);

const handleInput = () => {
  refs.span.setAttribute("style", `font-size: ${refs.input.value}px`);
};

refs.input.addEventListener("input", handleInput);
