// Good luck!

let estoyJugando = true;
let numeroCorrecto = Math.floor(Math.random() * 100);
let numIntentos = 10;
let intentosAnteriores = [];
const userInput = document.querySelector('#guessField');
let remainingSeconds = 5;

// let startBtn = document.getElementById("start-btn");
// function handleStartButtonClick() {
//   // Actualizar el contenido del elemento de tiempo restante con el valor inicial
//   remainingSecondsEl.innerHTML = remainingSeconds.toString();

//   // Iniciar la cuenta regresiva y guardar el ID del intervalo en una variable
//   let intervalId = setInterval(updateRemainingTime, 1000);
// }

// // Agregar el evento de escucha de clic al botón de start
// startBtn.addEventListener("click", handleStartButtonClick);

document.querySelector("#remaining-time").innerHTML = remainingSeconds;

// Cada segundo (1000ms) quiero que ejecutes la función updateRemainingTime
let timer = setInterval(updateRemainingTime, 1000);

function updateRemainingTime() {
  console.log("Me ejecuto cada segundo");
  // 1. Decrementar la variable de estado remainingSeconds
  remainingSeconds -= 1;
  console.log(remainingSeconds);
  // 2. Actualizar el innerHTML de #remaining-time
  let remainingSecondsUpdates = document.querySelector("#remaining-time");
  remainingSecondsUpdates.innerHTML = remainingSeconds.toString();
  // 3. Cuando llegue a 0 ha perdido
if (remainingSeconds === 0) {
clearInterval(timer);
userInput.value = '';


}
  //   3.1 Bloquear el input para que no pueda escribir más
  // 3.2 Mostrar un mensaje que el tiempo ha finalizado e informar al usuario del numero secreto, cual era
  // 3.3 Bonus: IMPEDIR que el usuario pueda hacer click en el botón
}

// Actualizar el innerHTML del nodo adecuado con el número de intentos iniciales

document.querySelector(".lastResult").innerHTML = numIntentos;

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // Impedimos que el formulario haga un petición GET

  // Comprobar si el número que ha puesto el usuario es mayor o menor que el numeroCorrecto. Tomar decisiones
  const userInput = parseInt(document.querySelector("#guessField").value);
  console.log(userInput);

  document.querySelector("#guessField").value = "";

  if (userInput === numeroCorrecto) {
    // El usuario adivinó el número correcto
    document.querySelector(
      ".lowOrHi"
    ).innerHTML = `<h1>"¡Adivinaste el número correcto!"</h1>`;
  } else if (userInput > numeroCorrecto) {
    // El número que puso el usuario es mayor que el número correcto
    document.querySelector(
      ".lowOrHi"
    ).innerHTML = `<h1>"El número que has puesto es mayor que el número correcto."</h1>`;
  } else {
    // El número que puso el usuario es menor que el número correcto
    document.querySelector(
      ".lowOrHi"
    ).innerHTML = `<h1>"El número que has puesto es menor que el número correcto."</h1>`;
  }

  intentosAnteriores.push(userInput);
  document.querySelector(".guesses").textContent = intentosAnteriores.join(" ");
});
