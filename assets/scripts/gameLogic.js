'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

const saveEvents = require('./events')

const gameBoard = []

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
// this is the handler to display x/o
  $('#x1y1').on('click', function () {
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
  )

  // })

  $('#x2y1').on('click', function () {
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
  )
  $('#x3y1').on('click', function () {
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
  )
})

$('#x1y2').on('click', function () {
// let x1y1gameBoard = []
  if (gameBoard.length === 0 || gameBoard.length === 2 || gameBoard.length === 4 || gameBoard.length === 6 || gameBoard.length === 8) {
    gameBoard.push('X')
    return $(this).text('X')
  } else if (gameBoard.length === 1 || gameBoard.length === 3 || gameBoard.length === 5 || gameBoard.length === 7) {
    gameBoard.push('O')
    return $(this).text('O')
  }
}
)
$('#x2y2').on('click', function () {
  // let x1y1gameBoard = []
  if (gameBoard.length === 0 || gameBoard.length === 2 || gameBoard.length === 4 || gameBoard.length === 6 || gameBoard.length === 8) {
    gameBoard.push('X')
    return $(this).text('X')
  } else if (gameBoard.length === 1 || gameBoard.length === 3 || gameBoard.length === 5 || gameBoard.length === 7) {
    gameBoard.push('O')
    return $(this).text('O')
  }
}
)
// })

$('#x3y2').on('click', function () {
  // let x1y1gameBoard = []
  if (gameBoard.length === 0 || gameBoard.length === 2 || gameBoard.length === 4 || gameBoard.length === 6 || gameBoard.length === 8) {
    gameBoard.push('X')
    return $(this).text('X')
  } else if (gameBoard.length === 1 || gameBoard.length === 3 || gameBoard.length === 5 || gameBoard.length === 7) {
    gameBoard.push('O')
    return $(this).text('O')
  }
}
)
$('#x1y3').on('click', function () {// let x1y1gameBoard = []
  if (gameBoard.length === 0 || gameBoard.length === 2 || gameBoard.length === 4 || gameBoard.length === 6 || gameBoard.length === 8) {
    gameBoard.push('X')
    return $(this).text('X')
  } else if (gameBoard.length === 1 || gameBoard.length === 3 || gameBoard.length === 5 || gameBoard.length === 7) {
    gameBoard.push('O')
    return $(this).text('O')
  }
}
)
// })

$('#x2y3').on('click', function () {
  // let x1y1gameBoard = []
  if (gameBoard.length === 0 || gameBoard.length === 2 || gameBoard.length === 4 || gameBoard.length === 6 || gameBoard.length === 8) {
    gameBoard.push('X')
    return $(this).text('X')
  } else if (gameBoard.length === 1 || gameBoard.length === 3 || gameBoard.length === 5 || gameBoard.length === 7) {
    gameBoard.push('O')
    return $(this).text('O')
  }
}
)
$('#x3y3').on('click', function () {
// let x1y1gameBoard = []
  if (gameBoard.length === 0 || gameBoard.length === 2 || gameBoard.length === 4 || gameBoard.length === 6 || gameBoard.length === 8) {
    gameBoard.push('X')
    return $(this).text('X')
  } else if (gameBoard.length === 1 || gameBoard.length === 3 || gameBoard.length === 5 || gameBoard.length === 7) {
    gameBoard.push('O')
    return $(this).text('O')
  }
}
)
// MUST US FORM ID NOT BUTTON ID!!!!
// })
