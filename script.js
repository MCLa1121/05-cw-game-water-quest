// // Game configuration and state variables
// const GOAL_CANS = 25;        // Total items needed to collect
// let currentCans = 0;         // Current number of items collected
// let gameActive = false;      // Tracks if game is currently running
// let spawnInterval;          // Holds the interval for spawning items

// // Creates the 3x3 game grid where items will appear
// function createGrid() {
//   const grid = document.querySelector('.game-grid');
//   grid.innerHTML = ''; // Clear any existing grid cells
//   for (let i = 0; i < 9; i++) {
//     const cell = document.createElement('div');
//     cell.className = 'grid-cell'; // Each cell represents a grid square
//     grid.appendChild(cell);
//   }
// }

// // Ensure the grid is created when the page loads
// createGrid();

// // Spawns a new item in a random grid cell
// function spawnWaterCan() {
//   if (!gameActive) return; // Stop if the game is not active
//   const cells = document.querySelectorAll('.grid-cell');
  
//   // Clear all cells before spawning a new water can
//   cells.forEach(cell => (cell.innerHTML = ''));

//   // Select a random cell from the grid to place the water can
//   const randomCell = cells[Math.floor(Math.random() * cells.length)];

//   // Use a template literal to create the wrapper and water-can element
//   randomCell.innerHTML = `
//     <div class="water-can-wrapper">
//       <div class="water-can"></div>
//     </div>
//   `;
// }

// // Initializes and starts a new game
// function startGame() {
//   if (gameActive) return; // Prevent starting a new game if one is already active
//   gameActive = true;
//   createGrid(); // Set up the game grid
//   spawnInterval = setInterval(spawnWaterCan, 1000); // Spawn water cans every second
// }

// function endGame() {
//   gameActive = false; // Mark the game as inactive
//   clearInterval(spawnInterval); // Stop spawning water cans
// }

// // Set up click handler for the start button
// document.getElementById('start-game').addEventListener('click', startGame);

//game setting 
const GOAL_CANS = 20;
const TIME_LIMIT = 30;

//varialbe that will change during the game process 
// Tracks how many jerry cans the player collected
let currentCans = 0;

// Tracks how much time is left
let timeLeft = TIME_LIMIT;

// Tracks whether the game is currently active
let gameActive = false;

// Stores the interval that spawns items
let spawnInterval;

// Stores the interval that controls the timer
let timerInterval;

// Some messsage that shows up when the player win or lose randomly
// Messages shown when the player wins
const winningMessages = [
  "You found enough clean water. The cave lets you leave.",
  "Mission complete! The hidden water source has been found.",
  "You followed the right echoes and collected enough water."
];

// Messages shown when the player loses
const losingMessages = [
  "The cave goes quiet... try again.",
  "You ran out of time before finding enough clean water.",
  "The echoes misled you. Restart and search again."
];

// Messages shown when the player clicks a yellow jerry can
const echoMessages = [
  "+1 jerry can collected!",
  "The echo guides you toward clean water.",
  "Another can found in the dark.",
  "Every drop counts."
];

// Messages shown when the player clicks polluted water
const pollutedMessages = [
  "Polluted water! -2 points.",
  "The cave tricked you. Avoid the dark water.",
  "Wrong echo... that was polluted."
];

// Score display
const currentCansDisplay = document.getElementById("current-cans");

// Timer display
const timerDisplay = document.getElementById("timer");

// Message display
const messageDisplay = document.getElementById("achievements");

// Start button
const startButton = document.getElementById("start-game");

// Reset button
const resetButton = document.getElementById("reset-game");

// Game grid area
const grid = document.querySelector(".game-grid");

// Creates the 3x3 game grid where items will appear
function createGrid() {
  const grid = document.querySelector('.game-grid');
  grid.innerHTML = ''; // Clear any existing grid cells
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'grid-cell'; // Each cell represents a grid square
    grid.appendChild(cell);
  }
}

function getRandomMessage(messages) {
  // Pick a random index number from the array
  const randomIndex = Math.floor(Math.random() * messages.length);

  // Return the message at that random index
  return messages[randomIndex];
}

// Displays a message in the message box with appropriate styling
function showMessage(text, type) {
  // Change the text inside the message box
  messageDisplay.textContent = text;

  // Reset the class first
  messageDisplay.className = "achievement";

  // If it is a good message, make it green
  if (type === "success") {
    messageDisplay.classList.add("success");
  }

  // If it is a bad message, make it red
  else if (type === "danger") {
    messageDisplay.classList.add("danger");
  }
}
