'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
})

// store the game board in a variable and have an array of 9 empty spots representing tic tac toe move options
let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
// create two players: player x and player o

let player = 0



// store all possible winning combos in a variable
const winners = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]
// way to access each cell
const cells = $('.cell')

// access reset button to refresh gameboard when clicked
$('.reset-btn').on("click", function() {
  startGame()
})

startGame()



// create a function for when the game starts, displaying an empty gameboard.
function startGame() {
  // hide winning pop up
  $('.winner').html("display", "none")
  // give each space on gameboard a number 0-8 for gameBoard array
  gameBoard = Array.from(Array(9).keys());
  // loop through each cell to display nothin, empty board
  for (let i = 0; i < cells.length; i++) {
  // each cell has text of empty parenthesis
    cells[i].innerText = ''
  // add eventlistener to each square that has been clicked
    cells[i].addEventListener("click", cellClick)

  }
}

// player === 0 ? player === 1 : player === 0

// display x or o when space on gameboard is clicked
function cellClick(cell) {

  playerTurn(cell.target.id, player)
  // playerTurn(cell.target.id, player)

}


// display x or o when space on gameboard is clicked
function playerTurn(cellId) {

  gameBoard[cellId] = player
    if(player === 0) {
      document.getElementById(cellId).innerHTML = "X"
      player = 1
    } else if (player === 1) {
       document.getElementById(cellId).innerHTML = "O"
      player = 0
     }
  }





// switch players

// check if player won game using winning combos

function checkWinner () {

  winners.forEach()



}


function switchPlayers () {
  if(player === 0) {
     document.getElementById(cellId).innerHTML = "X"
   } else if (player === 1) {
     document.getElementById(cellId).innerHTML = "O"
   }
 }
