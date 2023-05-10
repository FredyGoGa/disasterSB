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

const products = document.querySelectorAll(".btn");
products.forEach((product) => {
  product.addEventListener("click", function (event) {
    let productItem = "";
    Swal.fire({
      title: "Agregar producto?",
      text: "Se agregara este producto al carrito de compras, esta seguro?",
      html: productItem,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, agregar!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Agregado!",
          "Se añadio producto al carrito de compras.",
          "success"
        );
      }
    });
    event.preventDefault();
    // Aquí puedes agregar cualquier código adicional que desees ejecutar en lugar del evento predeterminado
  });
});

//Array que almacena los productos en el carrito.
let productItem = [];

//Funcion que agrega un producto al carrito.
function addToProduct(name, price) {
  productItem.push({ name: name, price: price });
  // Actualizar el carrito en la página
  updateProduct();
}

// Función que actualiza el carrito en la página
function updateProduct() {
  var producList = document.getElementById("cart-items");
  var producTotal = document.getElementById("cart-total");
  var total = 0;

  producList.innerHTML = "";

  for (let i = 0; i < productItem.length; i++) {
    const item = productItem[i];

    var li = document.createElement("li");
    li.innerText = item.name + " - $" + item.price;

    producList.appendChild(li);
    total += item.price;
  }
  producTotal.innerText = total;
}
