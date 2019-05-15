'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
})

const player1 = "X"
const player2 = "O"


$(document).ready(function(){
  const gameBoard = [
    ["", "", ""]
    ["", "", ""]
    ["", "", ""]
  ]
})


$('.col').click(function (){
  $(this).html(player1)
  const x = $(this).data('x')
  const y = $(this).data('y')
  gameBoard[x][y] = player1
  console.log(gameBoard)

})
