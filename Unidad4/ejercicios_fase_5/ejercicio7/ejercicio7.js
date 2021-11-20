//Función que mueve un elemento div si las teclas son adminidas
function mover(e) {
  //Variable de la distancia a recorrer al realizar una pulsación admitida
  let distancia = 5;
  //Variable que accede al estilo del elemento div
  const estilo = document.getElementById("caja").style;
  //Selector de casos
  switch (e.key) {
    //Tecla w
    case 'w':
      //Cambia el estilo para que disminuya la distancia respecto arriba
      estilo.top = `${parseInt(estilo.top) - distancia}px`;

      break;
    //Tecla s
    case 's':
      //Cambia el estilo para que aumente la distancia respecto arriba
      estilo.top = `${parseInt(estilo.top) + distancia}px`;

      break;
    //Tecla a
    case 'a':
      //Cambia el estilo para que disminuya la distancia respecto izquierda
      estilo.left = `${parseInt(estilo.left) - distancia}px`;

      break;
    //Tecla d
    case 'd':
      //Cambia el estilo para que aumente la distancia respecto izquierda
      estilo.left = `${parseInt(estilo.left) + distancia}px`;

      break;
    //Tecla flecha arriba
    case 'ArrowUp':
      //Cambia el estilo para que disminuya la distancia respecto arriba
      estilo.top = `${parseInt(estilo.top) - distancia}px`;

      break;
    //Tecla flecha abajo
    case 'ArrowDown':
      //Cambia el estilo para que aumente la distancia respecto arriba
      estilo.top = `${parseInt(estilo.top) + distancia}px`;

      break;
    //Tecla flecha izquierda
    case 'ArrowLeft':
      //Cambia el estilo para que disminuya la distancia respecto izquierda
      estilo.left = `${parseInt(estilo.left) - distancia}px`;

      break;
    //Tecla flecha derecha
    case 'ArrowRight':
      //Cambia el estilo para que aumente la distancia respecto izquierda
      estilo.left = `${parseInt(estilo.left) + distancia}px`;

      break;

  }

}
//Función que inicia los eventos
function iniciar() {
  //Ejecución del evento al pulsar una tecla
  document.onkeydown = mover;

}
//Al cargar el archivo se llama a la función iniciar
window.onload = iniciar;