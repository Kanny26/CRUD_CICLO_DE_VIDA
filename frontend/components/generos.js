// aqui se construye los radio buttons de género

export const armarGenero = (elemento, datos) => {
  const fragmento = document.createDocumentFragment();

  datos.forEach(genero => {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.setAttribute("for", genero.genero);  // for="M" → conecta con el input
    label.textContent = genero.genero;          // Texto visible: "M", "F", "Otro"

    input.setAttribute("type", "radio");        // Tipo radio (selección única)
    input.setAttribute("id", genero.genero);    // id="M"
    input.setAttribute("name", "generoId");     // Mismo name = mismo grupo (solo 1 seleccionable)
    input.value = genero.id;                    // value="1" → el id del género

    div.append(label, input);
    fragmento.append(div);
  });

  elemento.append(fragmento);
}


//lo anterior genera lo siguiente en el dom: 
 
// <div id="generos">
//   <div><label for="M">M</label><input type="radio" id="M" name="generoId" value="1"></div>
//   <div><label for="F">F</label><input type="radio" id="F" name="generoId" value="2"></div>
//   <div><label for="Otro">Otro</label><input type="radio" id="Otro" name="generoId" value="3"></div>
// </div>