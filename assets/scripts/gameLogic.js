'use strict'

const winningLogic = require('./winnerLogic')
const api = require('./api')
const ui = require('./ui')
// const submitValues = require('./events.js')

let turn = 1
let gameBoard = []

const setTurn = function (newTurn) {
  turn = newTurn
}

const setBoard = function (array) {
  gameBoard = array
}

const executeMove = function (event) {
  if (winningLogic.gameOver === true) {
    return
  }
  let isBox = false
  for (let i = 0; i < event.target.classList.length; i++) {
    if (event.target.classList[i] === 'box') {
      isBox = true
      break
    }
  }
  if (!isBox) {
    return
  }

  ++turn
  const y = parseInt(event.target.id.split(',')[1])
  const x = parseInt(event.target.id.split(',')[0])
  const indexValue = y * 3 + x
  if (gameBoard[indexValue]) {
    return
  }
  if (turn % 2 === 0 && winningLogic.gameOver === false) {
    gameBoard[indexValue] = 'X'
    event.target.innerHTML = 'X'
  } else if (turn % 2 !== 0 && winningLogic.gameOver === false) {
    gameBoard[indexValue] = 'O'
    event.target.innerHTML = 'O'
  } else if (winningLogic.gameOver === true) {
    $(this).unbind()
  }
  if (winningLogic.xWins() === true) {
    $('#message').text('X has Won, Please select New Game to play again')
  } else if (winningLogic.oWins() === true) {
    $('#message').text('O has Won, Please select New Game to play again')
  } else if (turn < 10) {
    $('#message').text('Next players turn!')
  }
  if (turn === 10 && winningLogic.gameOver === false) {
    winningLogic.gameOver = true
    $('#message').text('It is a tie! please select New Game to play again')
  }
  if (winningLogic.gameOver === true) {
    $('#gameboard').unbind('click')
  }
  api.updateGame(indexValue, turn % 2 === 0 ? 'x' : 'o', winningLogic.gameOver)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

export {
  gameBoard,
  setTurn,
  setBoard,
  executeMove
}
