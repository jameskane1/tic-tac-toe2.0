'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gamesLogic = require('./gameLogic')
// const winningLogic = require('./winnerLogic')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // this is x vs o logic
  $('#x1y1').one('click', gamesLogic.x1y1)
  $('#x2y1').one('click', gamesLogic.x2y1)
  $('#x3y1').one('click', gamesLogic.x3y1)
  $('#x1y2').one('click', gamesLogic.x1y2)
  $('#x2y2').one('click', gamesLogic.x2y2)
  $('#x3y2').one('click', gamesLogic.x3y2)
  $('#x1y3').one('click', gamesLogic.x1y3)
  $('#x2y3').one('click', gamesLogic.x2y3)
  $('#x3y3').on('click', gamesLogic.x3y3)
// MUST US FORM ID NOT BUTTON ID!!!!
// This is winner logic

// })
})
