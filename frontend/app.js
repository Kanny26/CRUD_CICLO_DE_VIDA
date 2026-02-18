

// 1. Importaciones: trae funciones de otros módulos
import { armarCiudades, armarGenero } from "./components/index.js";
import { validar } from "./helpers/validarFormulario.js";
import { ciudades, generos } from "./use-case/index.js";

// 2. Referencias al DOM
const formulario = document.querySelector('form');
const documento = document.querySelector("#documento");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const divGeneros = document.getElementById("generos");
const ciudadId = document.querySelector("#ciudadId");

// 3. Evento que espera a que el HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", async () => {
  let datosCiudades = await ciudades();  // GET /ciudades → [{id:1, ciudad:"Bucaramanga"}, ...]
  let datosGeneros = await generos();   // GET /generos  → [{id:1, genero:"M"}, ...]
  armarGenero(divGeneros, datosGeneros);   // Construye los radio buttons
  armarCiudades(ciudadId, datosCiudades); // Construye el select
})

// 4. Evento submit del formulario
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que la página recargue (comportamiento default del form)
  validar(e.target, reglas); // e.target es el propio <form>
});