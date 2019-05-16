'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
})


let gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
const player_X = "X"
const player_O = "O"
const winners = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
]

const cells = $('.cell')

startGame()


function startGame() {
  $('.winner').html("display", "none")
  gameBoard = Array.from(Array(9).keys());
  console.log(gameBoard)
      for(let i = 0; i < cells.length; i++) {
        cells[i].innerText = ''
        cells[i].addEventListener("click", cellClick, false)

  }
}



 function cellClick (cell) {
  playerTurn(cell.target.id, player_X)


}

function playerTurn (cellId, player) {
   gameBoard[cellId] = player
   document.getElementById(cellId).innerHTML = player
}
