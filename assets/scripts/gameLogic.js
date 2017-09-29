'use strict'

const winningLogic = require('./winnerLogic')
const api = require('./api')
const ui = require('./ui')

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
  const y = parseInt(event.target.id.split(',')[1])
  const x = parseInt(event.target.id.split(',')[0])
  const indexValue = y * 3 + x
  if (gameBoard[indexValue]) {
    return
  }
  ++turn
  if (turn % 2 === 0 && winningLogic.gameOver === false) {
    gameBoard[indexValue] = 'X'
    event.target.innerHTML = '<img src="https://i.ebayimg.com/images/a/(KGrHqUOKm4E4PccYS4mBONM7RtH-g~~/s-l300.jpg" height="75" width="75px">'
  } else if (turn % 2 !== 0 && winningLogic.gameOver === false) {
    gameBoard[indexValue] = 'O'
    event.target.innerHTML = '<img src="https://i.pinimg.com/736x/49/1b/c5/491bc5037c5d6ed1cb28d26f134cb6b4--espn-the-magazine-rob-gronkowski.jpg" height="75px" width="75px">'
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
