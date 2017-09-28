'use strict'

const gamesLogic = require('./gameLogic')
let gameOver = false

const xWins = function () {
  if ((gamesLogic.gameBoard[0] === 'X' && gamesLogic.gameBoard[1] === 'X' && gamesLogic.gameBoard[2] === 'X') ||
  (gamesLogic.gameBoard[0] === 'X' && gamesLogic.gameBoard[3] === 'X' && gamesLogic.gameBoard[6] === 'X') ||
  (gamesLogic.gameBoard[0] === 'X' && gamesLogic.gameBoard[4] === 'X' && gamesLogic.gameBoard[8] === 'X') ||
  (gamesLogic.gameBoard[1] === 'X' && gamesLogic.gameBoard[4] === 'X' && gamesLogic.gameBoard[7] === 'X') ||
  (gamesLogic.gameBoard[2] === 'X' && gamesLogic.gameBoard[5] === 'X' && gamesLogic.gameBoard[8] === 'X') ||
  (gamesLogic.gameBoard[2] === 'X' && gamesLogic.gameBoard[4] === 'X' && gamesLogic.gameBoard[6] === 'X') ||
  (gamesLogic.gameBoard[3] === 'X' && gamesLogic.gameBoard[4] === 'X' && gamesLogic.gameBoard[5] === 'X') ||
  (gamesLogic.gameBoard[6] === 'X' && gamesLogic.gameBoard[7] === 'X' && gamesLogic.gameBoard[8] === 'X')) {
    gameOver = true
    return true
  } else {
    return false
  }
}

const oWins = function () {
  if ((gamesLogic.gameBoard[0] === 'O' && gamesLogic.gameBoard[1] === 'O' && gamesLogic.gameBoard[2] === 'O') ||
  (gamesLogic.gameBoard[0] === 'O' && gamesLogic.gameBoard[3] === 'O' && gamesLogic.gameBoard[6] === 'O') ||
  (gamesLogic.gameBoard[0] === 'O' && gamesLogic.gameBoard[4] === 'O' && gamesLogic.gameBoard[8] === 'O') ||
  (gamesLogic.gameBoard[1] === 'O' && gamesLogic.gameBoard[4] === 'O' && gamesLogic.gameBoard[7] === 'O') ||
  (gamesLogic.gameBoard[2] === 'O' && gamesLogic.gameBoard[5] === 'O' && gamesLogic.gameBoard[8] === 'O') ||
  (gamesLogic.gameBoard[2] === 'O' && gamesLogic.gameBoard[4] === 'O' && gamesLogic.gameBoard[6] === 'O') ||
  (gamesLogic.gameBoard[3] === 'O' && gamesLogic.gameBoard[4] === 'O' && gamesLogic.gameBoard[5] === 'O') ||
  (gamesLogic.gameBoard[6] === 'O' && gamesLogic.gameBoard[7] === 'O' && gamesLogic.gameBoard[8] === 'O')) {
    gameOver = true
    return true
  } else {
    return false
  }
}

// const tie = function (gamesLogic.gameboard) {
//   if gamesLogic.gameBoard.filter (unction ())
// }

export {
  xWins,
  oWins,
  gameOver
}
