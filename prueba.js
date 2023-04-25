const hero = document.querySelector(".hero");
const textoNosotros = document.querySelector(".texto-nosotros");
const p = document.querySelector("p");
const parrafoDigitado = document.querySelector("#nombreDigitado");
//datos del formulario contacto.
const inputNombre = document.querySelector("#nombre");
const inputAsunto = document.querySelector("#asunto");
const inputEmail = document.querySelector("#email");
const inputTelefono = document.querySelector("#tel");
const inputMensaje = document.querySelector("#mensaje");
// console.log(
//   inputNombre.value,
//   inputAsunto.value,
//   inputEmail.value,
//   inputTelefono.value,
//   inputMensaje.value
// );
const inputEnviarFormulario = document.querySelector("#enviarFormulario");
//fin de variables de datos del formulario contacto.

const parrafoNosotros = document.querySelector(".parrafo");

// parrafoNosotros.innerText =
//   "estoy usando .innerText para manipular este elemento desde js ";
inputEnviarFormulario.addEventListener("click", function (event) {
  event.preventDefault();
});
function btnOnClick() {
  const Nombre = inputNombre.value;
  parrafoDigitado.innerText = "Bienvenido: " + Nombre;
}
