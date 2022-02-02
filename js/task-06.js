const input = document.querySelector("#validation-input");

function updateClass(a, b) {
  input.classList.add(a);
  input.classList.remove(b);
  console.log(a, b);
}

const handelBlur = () => {
  if (input.value.length === Number(input.getAttribute("data-length"))) {
    updateClass("valid", "invalid");
  } else {
    updateClass("invalid", "valid");
  }
};
input.addEventListener("blur", handelBlur);
