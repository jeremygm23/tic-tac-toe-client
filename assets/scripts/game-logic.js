//players stored in variables, one x and the other o
const player1 = "X"
const player2 = "O"

// function to call when game is over
const gameOver = function() {
  //check if 3 in a row horizontal
  for (let x = 0; x < 3; x++) {
    if (gameBoard[x][0] !== " " && gameBoard[x][0] === gameBoard[x][1] && gameBoard[x][0] === gameBoard[x][2]) {
      return gameBoard[x][0]
    }

  }

  //check if 3 in a row vertical
  if(gameBoard[2][0] !== ' ' && gameBoard[2][0] === gameBoard[1][1] && gameBoard[2][0] === gameBoard[0][2]){
    return gameBoard[2][0]
  }


  //check if 3 in a row diagonal -- bottom left to top right
   if(gameBoard[2][0] !== ' ' && gameBoard[2][0] === gameBoard[1][1] && gameBoard[2][0] === gameBoard[0][2]){
     return gameBoard[2][0]
   }


  //check if 3 in a row diagonal -- top left to bottom right
  if(gameBoard[0][0] !== ' ' && gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2]){
    return gameBoard[0][0]
  }


 let isEmpty = false
 for(let x = 0; x < 3; x++){
   for(let y = 0; y < 3; y++ ){
      if(gameBoard[x][y] === ""){
        return isEmpty
      }
   }
 }


 return ""


}



$(document).ready(function() {
  const gameBoard = [
    ["", "", ""]
    ["", "", ""]
    ["", "", ""]
  ]



  $('.col').click(function() {
    $(this).html(player1)
    const x = $(this).data('x')
    const y = $(this).data('y')
    gameBoard[x][y] = player1
    console.log(gameBoard)

  })

})
