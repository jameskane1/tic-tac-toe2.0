'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const submitValues = require('./events.js')

$(() => {
  setAPIOrigin(location, config)
})

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
