const refs = {
  form: document.querySelector(".login-form"),
  btn: document.querySelector('button[type="submit"]'),
};

function onSubmit(event) {
  event.preventDefault();
  const inputEmail = event.target.elements.email;
  const inputPassword = event.target.elements.password;

  if (inputEmail.value === "" || inputPassword.value === "") {
    alert("Заполните, пожалуйста, пустые поля!");
  } else {
    const obj = {
      email: inputEmail.value,
      password: inputPassword.value,
    };
    console.log(obj);
    refs.form.reset();
  }
}

refs.form.addEventListener("submit", onSubmit);
