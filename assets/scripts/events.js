'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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

export {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
