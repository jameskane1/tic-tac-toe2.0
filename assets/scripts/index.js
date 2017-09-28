'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gamesLogic = require('./gameLogic')
const submitValues = require('./events.js')
// const winningLogic = require('./winnerLogic')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
// sign up event handler
  $('#sign-up-submit').on('submit', submitValues.onSignUp)
  // sign up event handler
  $('#sign-in-submit').on('submit', submitValues.onSignIn)
  // change password handler
  $('#change-password').on('submit', submitValues.onChangePassword)
  // Sign Out handler
  $('#signoutbutton').on('submit', submitValues.onSignOut)
  // This is the newGame handler
  $('#newGameButton').on('submit', submitValues.onNewGame)
  // this is x vs o logic
  $('#x1y1').one('click', gamesLogic.x1y1)
  $('#x2y1').one('click', gamesLogic.x2y1)
  $('#x3y1').one('click', gamesLogic.x3y1)
  $('#x1y2').one('click', gamesLogic.x1y2)
  $('#x2y2').one('click', gamesLogic.x2y2)
  $('#x3y2').one('click', gamesLogic.x3y2)
  $('#x1y3').one('click', gamesLogic.x1y3)
  $('#x2y3').one('click', gamesLogic.x2y3)
  $('#x3y3').one('click', gamesLogic.x3y3)

// MUST US FORM ID NOT BUTTON ID!!!!
// This is winner logic

// })
})
