'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const gamesLogic = require('./gameLogic.js')
const winningLogic = require('./winnerLogic')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createSignUp(data)
  // console.log('data is ', data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createSignIn(data)
  // console.log('data is ', data)
    .then(ui.signInSuccess)
    .then(ui.removeClass)
    .then(ui.addClass)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
  // console.log('data is ', data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
  // console.log(data)
    .then(ui.signOutSuccess)
    .then(ui.addClassBoard)
    .then(ui.removeClassSignin)
    .catch(ui.signOutFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame(event)
    .then(ui.newGameSuccess)
    .then(gamesLogic.setTurn(1))
    .then($('.box').text(''))
    .then($('.box').unbind('click'))
    .then($('#x1y1').one('click', gamesLogic.x1y1))
    .then($('#x2y1').one('click', gamesLogic.x2y1))
    .then($('#x3y1').one('click', gamesLogic.x3y1))
    .then($('#x1y2').one('click', gamesLogic.x1y2))
    .then($('#x2y2').one('click', gamesLogic.x2y2))
    .then($('#x3y2').one('click', gamesLogic.x3y2))
    .then($('#x1y3').one('click', gamesLogic.x1y3))
    .then($('#x2y3').one('click', gamesLogic.x2y3))
    .then($('#x3y3').one('click', gamesLogic.x3y3))
    .then(gamesLogic.setBoard([]))
    .then(winningLogic.gameOver = false)
    .catch(ui.newGameFailure)
  console.log('this is gameboard', gamesLogic.gameBoard)
}

export {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame
}
