// aqui se construye el <select> de ciudades

export const armarCiudades = (elemento, datos) => {
  // Fragmento: es como un contenedor temporal en memoria,
  // evita múltiples re-renders del DOM (mejor rendimiento)
  const fragmento = document.createDocumentFragment();

  datos.forEach(ciudad => {
    const opcion = document.createElement('option'); // Crea <option>
    opcion.setAttribute("value", ciudad.id);         // value="1"
    opcion.textContent = ciudad.ciudad;              // texto visible: "Bucaramanga"
    fragmento.append(opcion);                        // Lo añade al fragmento
  });

  elemento.append(fragmento); // Inserta todo de una vez en el <select>
}

// Recibe el elemento <select> y el array de ciudades, y genera algo así:

// <select id="ciudadId">
//   <option value="1">Bucaramanga</option>
//   <option value="2">Pereira</option>
//   <option value="3">Cali</option>
// </select>

