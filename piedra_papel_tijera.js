let computadora;
let eleccionComputadora;
let jugador;
let eleccionJugador;
let resultado;

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

computadora = aleatorio(1, 3);

if (computadora === 1) {
  eleccionComputadora = "piedra";
} else if (computadora === 2) {
  eleccionComputadora = "papel";
} else if (computadora === 3) {
  eleccionComputadora = "tijera";
}

jugador = prompt("Escribi una de las opciones:\nPiedra\nPapel\nTijera").toLowerCase();

if (jugador === "piedra") {
  eleccionJugador = "piedra";
} else if (jugador === "papel") {
  eleccionJugador = "papel";
} else if (jugador === "tijera") {
  eleccionJugador = "tijera";
}

if (eleccionComputadora === "piedra" && eleccionJugador === "piedra") {
  resultado = "EMPATE -_-";
} else if (eleccionComputadora === "papel" && eleccionJugador === "papel") {
  resultado = "EMPATE -_-";
} else if (eleccionComputadora === "tijera" && eleccionJugador === "tijera") {
  resultado = "EMPATE -_-";
}else if (eleccionComputadora === "piedra" && eleccionJugador === "papel") {
  resultado = "GANASTE! *u*";
} else if (eleccionComputadora === "papel" && eleccionJugador === "tijera") {
  resultado = "GANASTE! *u*";
} else if (eleccionComputadora === "tijera" && eleccionJugador === "piedra") {
  resultado = "GANASTE! *u*";
} else if (eleccionComputadora === "piedra" && eleccionJugador === "tijera") {
  resultado = "PERDISTE :(";
} else if (eleccionComputadora === "papel" && eleccionJugador === "piedra") {
  resultado = "PERDISTE :(";
} else if (eleccionComputadora === "tijera" && eleccionJugador === "papel") {
  resultado = "PERDISTE :(";
}

alert("La computadora elige " + eleccionComputadora + "\nEl jugador elige " + eleccionJugador + "\n" + resultado);