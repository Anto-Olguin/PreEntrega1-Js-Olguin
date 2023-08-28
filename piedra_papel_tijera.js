const opciones = ["piedra", "papel", "tijera"];

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function obtenerEleccionComputadora() {
  return opciones[aleatorio(0, 2)];
}

function obtenerResultado(eleccionComputadora, eleccionJugador) {
  if (eleccionComputadora === eleccionJugador) {
    return "EMPATE -_-";
  } else if (
    (eleccionComputadora === "piedra" && eleccionJugador === "papel") ||
    (eleccionComputadora === "papel" && eleccionJugador === "tijera") ||
    (eleccionComputadora === "tijera" && eleccionJugador === "piedra")
  ) {
    return "GANASTE! *u*";
  } else {
    return "PERDISTE :(";
  }
}

let jugarOtraVez = true;

while (jugarOtraVez) {
  const eleccionComputadora = obtenerEleccionComputadora();
  const eleccionJugador = prompt(
    "Escribi una de las opciones:\nPiedra\nPapel\nTijera"
  ).toLowerCase();
  const resultado = obtenerResultado(eleccionComputadora, eleccionJugador);

  alert(
    `La computadora elige ${eleccionComputadora}\nEl jugador elige ${eleccionJugador}\n${resultado}`
  );

  jugarOtraVez = confirm("¿Queres jugar otra vez?");
}