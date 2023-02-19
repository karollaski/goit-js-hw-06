const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const objectForm = {
    email: email.value,
    password: password.value,
  };
  event.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);
