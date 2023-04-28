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
const inputEnviar = document.querySelector("#enviar");
//fin de variables de datos del formulario contacto.
// const parrafoNosotros = document.querySelector(".parrafo");
const inputPais = document.querySelector("#paises");
// const paisSeleccionado = inputPais.value;
const logoUp = document.querySelector(".logoUP");

const nombreSitio = document.querySelector(".inactive");
if (logoUp) {
  logoUp.addEventListener("click", toggleLogoUp);

  function toggleLogoUp() {
    nombreSitio.classList.toggle(".inactive");
  }
}

// parrafoNosotros.innerText =
//   "estoy usando .innerText para manipular este elemento desde js ";
if (formContacto) {
  formContacto.addEventListener("submit", function (evento) {
    evento.preventDefault();
    var datos = new FormData(formContacto);
    console.log(datos);
    console.log(datos.get("name"));
    console.log(datos.get("asunto"));
    console.log(datos.get("email"));
    console.log(datos.get("tel"));
    console.log(datos.get("mensaje"));
    console.log(paisSeleccionado);
  });
}

// function enviarDatosFormulario(event) {
//   event.preventDefault();
//   const Nombre = inputNombre.value;
//   parrafoDigitado.innerText = "Bienvenido: " + Nombre;
// }
// formContacto.addEventListener("submit", enviarDatosFormulario);

// inputEnviarFormulario.addEventListener("click", function (event) {
//   event.preventDefault();
// });
