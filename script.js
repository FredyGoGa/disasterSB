const hero = document.querySelector(".hero");
const textoNosotros = document.querySelector(".texto-nosotros");
const p = document.querySelector("p");
const parrafoDigitado = document.querySelector("#nombreDigitado");
//datos del formulario contacto.
const formContacto = document.querySelector("#formContacto");
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
// const inputEnviarFormulario = document.querySelector("#enviarFormulario");
//fin de variables de datos del formulario contacto.

const parrafoNosotros = document.querySelector(".parrafo");

// parrafoNosotros.innerText =
//   "estoy usando .innerText para manipular este elemento desde js ";

formContacto.addEventListener("submit", function (evento) {
  evento.preventDefault();
  console.log("funciona");
  var datos = new FormData(formContacto);
  console.log(datos);
  console.log(datos.get("name"));
  console.log(datos.get("asunto"));
  console.log(datos.get("email"));
  console.log(datos.get("tel"));
  console.log(datos.get("mensaje"));
});

// inputEnviarFormulario.addEventListener("click", function (event) {
//   event.preventDefault();
// });
// function btnOnClick() {
//   const Nombre = inputNombre.value;
//   parrafoDigitado.innerText = "Bienvenido: " + Nombre;
// }
