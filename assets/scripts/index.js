'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const submitValues = require('./events.js')

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

  document.body.style.backgroundColor = 'transparent'
})
