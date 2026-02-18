//async/await permite manejar promesas de forma legible. El fetch hace una petición GET al servidor (json-server), que responde con el JSON de ciudades.

export const ciudades = async () => {
  const solicitud = await fetch('http://localhost:3001/ciudades'); // Petición HTTP GET
  const datos = await solicitud.json();                           // Convierte respuesta a objeto JS
  return datos;                                                   // Retorna el array de ciudades
}