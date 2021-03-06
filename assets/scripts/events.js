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
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createSignIn(data)
    .then(ui.signInSuccess)
    .then(ui.removeClass)
    .then(ui.addClass)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .then(() => {
      $('#change-password')[0].reset()
    })
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .then(ui.addClassBoard)
    .then(ui.removeClassSignin)
    .then(() => {
      $('#sign-in-submit')[0].reset()
    })
    .then(() => {
      $('#sign-up-submit')[0].reset()
    })
    .catch(ui.signOutFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame(event)
    .then(ui.newGameSuccess)
    .then(() => {
      gamesLogic.setTurn(1)
    })
    .then(() => {
      $('.box').text('')
    })
    .then(() => {
      $('#gameboard').unbind()
      $('#gameboard').on('click', gamesLogic.executeMove)
    })
    .then(onGameTracker)
    .then(() => {
      gamesLogic.setBoard([])
    })
    .then(() => {
      winningLogic.gameOver = false
    })
    .then(ui.startNewGame)
    .catch(ui.newGameFailure)
}

const onUpdateGame = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const onGameTracker = function () {
  api.gameData()
    .then(ui.gameTrackerSuccess)
    .catch(ui.gameTrackerFailure)
}

export {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onUpdateGame,
  onGameTracker
}
