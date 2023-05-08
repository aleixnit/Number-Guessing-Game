//Generate a random number between 1 and 500
let randomNumber = parseInt((Math.random()*100)+1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;
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
userInput.setAttribute('disabled', '');
submit.disabled = true;
p.innerHTML = `<h1>Game Over! Number was ${randomNumber}</h1>`
startOver.appendChild(p);

//Display Start new Game Button
// p.classList.add('button');
// p.innerHTML = `<h1 id="newGame">Start New Game</h1>`
// startOver.appendChild(p);
// playGame = false;
// newGame();
}
  //   3.1 Bloquear el input para que no pueda escribir más
  // 3.2 Mostrar un mensaje que el tiempo ha finalizado e informar al usuario del numero secreto, cual era
  // 3.3 Bonus: IMPEDIR que el usuario pueda hacer click en el botón
}

if (playGame){
    subt.addEventListener('click', function(e){
        e.preventDefault();
        //Grab guess from user
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if (isNaN(guess)){
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1!');
    } else if (guess > 100){
        alert('Please enter a number less than 500!')
    } else {
        //Keep record of number of attempted guesses
        previousGuesses.push(guess);
        //Check to see if game is over
        if (numGuesses === 11){
            displayGuesses(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
        //Display previous guessed numbers
        displayGuesses(guess);
        //Check guess and display if wrong
        checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    //Display clue if guess is too high or too low
    if (guess === randomNumber){
        displayMessage(`You guessed correctly!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Too low! Try again!`);
    } else if (guess > randomNumber) {
        displayMessage(`Too High! Try again!`);
    }
}

function displayGuesses(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses}  `;
}

function displayMessage(message){
        lowOrHi.innerHTML = `<h1>${message}</h1>`
}

function endGame(){
    //Clear user input
    userInput.value = '';
    //Disable user input button
    userInput.setAttribute('disabled', '');
    //Display Start new Game Button
          p.classList.add('button');
          p.innerHTML = `<h1 id="newGame">Start New Game</h1>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        //Pick a new random number
        randomNumber = parseInt((Math.random()*100)+1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}  `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
//Allow to restart game with restart button
//Change DIV to a form so it can accept the enter key

//NOTES:
//NaN != NaN