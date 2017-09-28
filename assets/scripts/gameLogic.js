'use strict'

const winningLogic = require('./winnerLogic')

let turn = 1
let gameBoard = []
if (winningLogic.gameOver === true) {
  $('#x3y3').unbind('click')
}

const x1y1 = function () {
  ++turn
  if (turn % 2 === 0 && winningLogic.gameOver === false) {
    gameBoard[0] = 'X'
    $(this).text('X')
  } else if (turn % 2 !== 0 && winningLogic.gameOver === false) {
    gameBoard[0] = 'O'
    $(this).text('O')
  } else if (winningLogic.gameOver === true) {
    $(this).unbind()
  }
  if (winningLogic.xWins() === true) {
    console.log('X has won!!')
  } else if (winningLogic.oWins() === true) {
    console.log('O has won!!')
  } else if (turn < 10) {
    console.log('next persons turn!')
  }
  if (turn === 10 && winningLogic.gameOver === false) {
    winningLogic.gameOver = true
    console.log('It is a tie! please play a new game')
  }
  console.log('this is the turn', turn)
  console.log('this is game over', winningLogic.gameOver)
}

const x2y1 = function () {
  ++turn
  if (turn % 2 === 0 && winningLogic.gameOver === false) {
    gameBoard[1] = 'X'
    $(this).text('X')
  } else if (turn % 2 !== 0 && winningLogic.gameOver === false) {
    gameBoard[1] = 'O'
    $(this).text('O')
  } else if (winningLogic.gameOver === true) {
    $(this).unbind()
  }
  if (winningLogic.xWins() === true) {
    console.log('X has won!!')
  } else if (winningLogic.oWins() === true) {
    console.log('O has won!!')
  } else if (turn < 10) {
    console.log('next persons turn!')
  }
  if (turn === 10 && winningLogic.gameOver === false) {
    winningLogic.gameOver = true
    console.log('It is a tie! please play a new game')
  }
  console.log('this is the turn', turn)
  console.log('this is game over', winningLogic.gameOver)
}

const x3y1 = function () {
  ++turn
  if (turn % 2 === 0 && winningLogic.gameOver === false) {
    gameBoard[2] = 'X'
    $(this).text('X')
  } else if (turn % 2 !== 0 && winningLogic.gameOver === false) {
    gameBoard[2] = 'O'
    $(this).text('O')
  } else if (winningLogic.gameOver === true) {
    $(this).unbind()
  }
  if (winningLogic.xWins() === true) {
    console.log('X has won!!')
  } else if (winningLogic.oWins() === true) {
    console.log('O has won!!')
  } else if (turn < 10) {
    console.log('next persons turn!')
  }
  if (turn === 10 && winningLogic.gameOver === false) {
    winningLogic.gameOver = true
    console.log('It is a tie! please play a new game')
  }
  console.log('this is the turn', turn)
  console.log('this is game over', winningLogic.gameOver)
}

const x1y2 = function () {
  ++turn
  if (turn % 2 === 0 && winningLogic.gameOver === false) {
    gameBoard[3] = 'X'
    $(this).text('X')
  } else if (turn % 2 !== 0 && winningLogic.gameOver === false) {
    gameBoard[3] = 'O'
    $(this).text('O')
  } else if (winningLogic.gameOver === true) {
    $(this).unbind()
  }
  if (winningLogic.xWins() === true) {
    console.log('X has won!!')
  } else if (winningLogic.oWins() === true) {
    console.log('O has won!!')
  } else if (turn < 10) {
    console.log('next persons turn!')
  }
  if (turn === 10 && winningLogic.gameOver === false) {
    winningLogic.gameOver = true
    console.log('It is a tie! please play a new game')
  }
  console.log('this is the turn', turn)
  console.log('this is game over', winningLogic.gameOver)
}

const x2y2 = function () {
  ++turn
  if (turn % 2 === 0 && winningLogic.gameOver === false) {
    gameBoard[4] = 'X'
    $(this).text('X')
  } else if (turn % 2 !== 0 && winningLogic.gameOver === false) {
    gameBoard[4] = 'O'
    $(this).text('O')
  } else if (winningLogic.gameOver === true) {
    $(this).unbind()
  }
  if (winningLogic.xWins() === true) {
    console.log('X has won!!')
  } else if (winningLogic.oWins() === true) {
    console.log('O has won!!')
  } else if (turn < 10) {
    console.log('next persons turn!')
  }
  if (turn === 10 && winningLogic.gameOver === false) {
    winningLogic.gameOver = true
    console.log('It is a tie! please play a new game')
  }
  console.log('this is the turn', turn)
  console.log('this is game over', winningLogic.gameOver)
}
console.log(gameBoard)
const x3y2 = function () {
  ++turn
  if (turn % 2 === 0 && winningLogic.gameOver === false) {
    gameBoard[5] = 'X'
    $(this).text('X')
  } else if (turn % 2 !== 0 && winningLogic.gameOver === false) {
    gameBoard[5] = 'O'
    $(this).text('O')
  } else if (winningLogic.gameOver === true) {
    $(this).unbind()
  }
  if (winningLogic.xWins() === true) {
    console.log('X has won!!')
  } else if (winningLogic.oWins() === true) {
    console.log('O has won!!')
  } else if (turn < 10) {
    console.log('next persons turn!')
  }
  if (turn === 10 && winningLogic.gameOver === false) {
    winningLogic.gameOver = true
    console.log('It is a tie! please play a new game')
  }
  console.log('this is the turn', turn)
  console.log('this is game over', winningLogic.gameOver)
}
console.log(gameBoard)
const x1y3 = function () {
  ++turn
  if (turn % 2 === 0 && winningLogic.gameOver === false) {
    gameBoard[6] = 'X'
    $(this).text('X')
  } else if (turn % 2 !== 0 && winningLogic.gameOver === false) {
    gameBoard[6] = 'O'
    $(this).text('O')
  } else if (winningLogic.gameOver === true) {
    $(this).unbind()
  }
  if (winningLogic.xWins() === true) {
    console.log('X has won!!')
  } else if (winningLogic.oWins() === true) {
    console.log('O has won!!')
  } else if (turn < 10) {
    console.log('next persons turn!')
  }
  if (turn === 10 && winningLogic.gameOver === false) {
    winningLogic.gameOver = true
    console.log('It is a tie! please play a new game')
  }
  console.log('this is the turn', turn)
  console.log('this is game over', winningLogic.gameOver)
}

const x2y3 = function () {
  ++turn
  if (turn % 2 === 0 && winningLogic.gameOver === false) {
    gameBoard[7] = 'X'
    $(this).text('X')
  } else if (turn % 2 !== 0 && winningLogic.gameOver === false) {
    gameBoard[7] = 'O'
    $(this).text('O')
  } else if (winningLogic.gameOver === true) {
    $(this).unbind()
  }
  if (winningLogic.xWins() === true) {
    console.log('X has won!!')
  } else if (winningLogic.oWins() === true) {
    console.log('O has won!!')
  } else if (turn < 10) {
    console.log('next persons turn!')
  }
  if (turn === 10 && winningLogic.gameOver === false) {
    winningLogic.gameOver = true
    console.log('It is a tie! please play a new game')
    console.log('this is game over', winningLogic.gameOver)
  }
  console.log('this is the turn', turn)
}

console.log(gameBoard)
const x3y3 = function () {
  ++turn
  if (turn % 2 === 0 && winningLogic.gameOver === false) {
    gameBoard[8] = 'X'
    $(this).text('X')
  } else if (turn % 2 !== 0 && winningLogic.gameOver === false) {
    gameBoard[8] = 'O'
    $(this).text('O')
  } else if (winningLogic.gameOver === true) {
    $(this).unbind()
  }
  if (winningLogic.xWins() === true) {
    console.log('X has won!!')
  } else if (winningLogic.oWins() === true) {
    console.log('O has won!!')
  } else if (turn < 10) {
    console.log('next persons turn!')
  }
  if (turn === 10 && winningLogic.gameOver === false) {
    winningLogic.gameOver = true
    console.log('It is a tie! please play a new game')
    console.log('this is game over', winningLogic.gameOver)
  }
  console.log('this is the turn', turn)
}

const setTurn = function (newTurn) {
  turn = newTurn
}

const setBoard = function (array) {
  gameBoard = array
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
  gameBoard,
  setTurn,
  setBoard
}
