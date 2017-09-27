'use strict'
let turn = 1
const gameBoard = []

const x1y1 = function () {
  ++turn
  if (turn % 2 === 0) {
    gameBoard[0] = 'X'
    return $(this).text('X')
  } else if (turn % 2 !== 0) {
    gameBoard[0] = 'O'
    return $(this).text('O')
  }
  console.log('this is the turn count', turn)
}
console.log('this is the turn count', turn)
const x2y1 = function () {
  ++turn
  if (turn % 2 === 0) {
    gameBoard[1] = 'X'
    return $(this).text('X')
  } else if (turn % 2 !== 0) {
    gameBoard[1] = 'O'
    return $(this).text('O')
  }
}
console.log('this is the turn count', turn)
console.log(gameBoard)
const x3y1 = function () {
  ++turn
  if (turn % 2 === 0) {
    gameBoard[2] = 'X'
    return $(this).text('X')
  } else if (turn % 2 !== 0) {
    gameBoard[2] = 'O'
    return $(this).text('O')
  }
}
console.log(gameBoard)
const x1y2 = function () {
  ++turn
  if (turn % 2 === 0) {
    gameBoard[3] = 'X'
    return $(this).text('X')
  } else if (turn % 2 !== 0) {
    gameBoard[3] = 'O'
    return $(this).text('O')
  }
}
console.log(gameBoard)
const x2y2 = function () {
  ++turn
  if (turn % 2 === 0) {
    gameBoard[4] = 'X'
    return $(this).text('X')
  } else if (turn % 2 !== 0) {
    gameBoard[4] = 'O'
    return $(this).text('O')
  }
}
console.log(gameBoard)
const x3y2 = function () {
  ++turn
  if (turn % 2 === 0) {
    gameBoard[5] = 'X'
    return $(this).text('X')
  } else if (turn % 2 !== 0) {
    gameBoard[5] = 'O'
    return $(this).text('O')
  }
}
console.log(gameBoard)
const x1y3 = function () {
  ++turn
  if (turn % 2 === 0) {
    gameBoard[6] = 'X'
    return $(this).text('X')
  } else if (turn % 2 !== 0) {
    gameBoard[6] = 'O'
    return $(this).text('O')
  }
}
console.log(gameBoard)
const x2y3 = function () {
  ++turn
  if (turn % 2 === 0) {
    gameBoard[7] = 'X'
    return $(this).text('X')
  } else if (turn % 2 !== 0) {
    gameBoard[7] = 'O'
    return $(this).text('O')
  }
}
console.log(gameBoard)
const x3y3 = function () {
  ++turn
  if (turn % 2 === 0) {
    gameBoard[8] = 'X'
    return $(this).text('X')
  } else if (turn % 2 !== 0) {
    gameBoard[8] = 'O'
    return $(this).text('O')
  }
}
console.log(gameBoard)
export {
  x1y1,
  x2y1,
  x3y1,
  x1y2,
  x2y2,
  x3y2,
  x1y3,
  x2y3,
  x3y3,
  gameBoard
}
