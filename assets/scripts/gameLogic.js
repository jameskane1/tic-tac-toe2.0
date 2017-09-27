const gameBoard = []

const x1y1 = function () {
// let x1y1gameBoard = []
  if (gameBoard.length === 0 || gameBoard.length === 2 || gameBoard.length === 4 || gameBoard.length === 6 || gameBoard.length === 8) {
    gameBoard.push('X')
    return $(this).text('X')
  } else if (gameBoard.length === 1 || gameBoard.length === 3 || gameBoard.length === 5 || gameBoard.length === 7) {
    gameBoard.push('O')
    return $(this).text('O')
  }
  console.log(gameBoard)
}

const x2y1 = function () {
  if (gameBoard.length === 0 || gameBoard.length === 2 || gameBoard.length === 4 || gameBoard.length === 6 || gameBoard.length === 8) {
    gameBoard.push('X')
    return $(this).text('X')
  } else if (gameBoard.length === 1 || gameBoard.length === 3 || gameBoard.length === 5 || gameBoard.length === 7) {
    gameBoard.push('O')
    return $(this).text('O')
  }
  console.log(gameBoard)
}
const x3y1 = function () {
  // let x1y1gameBoard = []
  if (gameBoard.length === 0 || gameBoard.length === 2 || gameBoard.length === 4 || gameBoard.length === 6 || gameBoard.length === 8) {
    gameBoard.push('X')
    return $(this).text('X')
  } else if (gameBoard.length === 1 || gameBoard.length === 3 || gameBoard.length === 5 || gameBoard.length === 7) {
    gameBoard.push('O')
    return $(this).text('O')
  }
  console.log(gameBoard)
}

const x1y2 = function () {
// let x1y1gameBoard = []
  if (gameBoard.length === 0 || gameBoard.length === 2 || gameBoard.length === 4 || gameBoard.length === 6 || gameBoard.length === 8) {
    gameBoard.push('X')
    return $(this).text('X')
  } else if (gameBoard.length === 1 || gameBoard.length === 3 || gameBoard.length === 5 || gameBoard.length === 7) {
    gameBoard.push('O')
    return $(this).text('O')
  }
}

const x2y2 = function () {
  // let x1y1gameBoard = []
  if (gameBoard.length === 0 || gameBoard.length === 2 || gameBoard.length === 4 || gameBoard.length === 6 || gameBoard.length === 8) {
    gameBoard.push('X')
    return $(this).text('X')
  } else if (gameBoard.length === 1 || gameBoard.length === 3 || gameBoard.length === 5 || gameBoard.length === 7) {
    gameBoard.push('O')
    return $(this).text('O')
  }
}

const x3y2 = function () {
  // let x1y1gameBoard = []
  if (gameBoard.length === 0 || gameBoard.length === 2 || gameBoard.length === 4 || gameBoard.length === 6 || gameBoard.length === 8) {
    gameBoard.push('X')
    return $(this).text('X')
  } else if (gameBoard.length === 1 || gameBoard.length === 3 || gameBoard.length === 5 || gameBoard.length === 7) {
    gameBoard.push('O')
    return $(this).text('O')
  }
}

const x1y3 = function () {
  if (gameBoard.length === 0 || gameBoard.length === 2 || gameBoard.length === 4 || gameBoard.length === 6 || gameBoard.length === 8) {
    gameBoard.push('X')
    return $(this).text('X')
  } else if (gameBoard.length === 1 || gameBoard.length === 3 || gameBoard.length === 5 || gameBoard.length === 7) {
    gameBoard.push('O')
    return $(this).text('O')
  }
}

const x2y3 = function () {
  // let x1y1gameBoard = []
  if (gameBoard.length === 0 || gameBoard.length === 2 || gameBoard.length === 4 || gameBoard.length === 6 || gameBoard.length === 8) {
    gameBoard.push('X')
    return $(this).text('X')
  } else if (gameBoard.length === 1 || gameBoard.length === 3 || gameBoard.length === 5 || gameBoard.length === 7) {
    gameBoard.push('O')
    return $(this).text('O')
  }
}

const x3y3 = function () {
// let x1y1gameBoard = []
  if (gameBoard.length === 0 || gameBoard.length === 2 || gameBoard.length === 4 || gameBoard.length === 6 || gameBoard.length === 8) {
    gameBoard.push('X')
    return $(this).text('X')
  } else if (gameBoard.length === 1 || gameBoard.length === 3 || gameBoard.length === 5 || gameBoard.length === 7) {
    gameBoard.push('O')
    return $(this).text('O')
  }
}

export {
  x1y1,
  x2y1,
  x3y1,
  x1y2,
  x2y2,
  x3y2,
  x1y3,
  x2y3,
  x3y3
}
