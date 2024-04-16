const form = document.getElementById("form");
const field = document.getElementById("form-field");
const submit = document.getElementById("form-submit");

console.log(form, field, submit)

function onSubmit(event) {
  event.preventDefault();
  if (!field.value || !field.value.includes("@")) {
    form.classList.add("form--invalid")
  } else {
    form.classList.remove("form--invalid")
  }
}

submit.addEventListener("click", onSubmit)