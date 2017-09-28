'use strict'
const store = require('./store')

const signUpSuccess = function (data) {
  $('#message').text('you have successfully signed up!')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#message').text('your signup was unseccessful')
  console.error(error)
}

const signInSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed in successfully')
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Incorrect Email or PW')
  console.error(error)
}

const removeClass = function () {
  $('#gameboard').removeClass('gameboard')
  $('#change-password').removeClass('gameboard')
  $('#signoutbutton').removeClass('gameboard')
}

const addClass = function () {
  $('#sign-in-submit').addClass('gameboard')
  $('#sign-up-submit').addClass('gameboard')
}

const removeClassSignin = function () {
  $('#sign-in-submit').removeClass('gameboard')
  $('#sign-up-submit').removeClass('gameboard')
}

const addClassBoard = function () {
  $('#gameboard').addClass('gameboard')
  $('#change-password').addClass('gameboard')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed Password successfully')
}

const changePasswordFailure = function (error) {
  $('#message').text('Incorrect PW')
  console.error(error)
}

const signOutSuccess = function () {
  // console.log(data)
  $('#message').text('You have successfully signed out')
  store.user = null
  console.log(store.user)
}

const signOutFailure = function (error) {
  $('#message').text('Unable to sign out')
  console.error(error)
}

export {
  signUpFailure,
  signInSuccess,
  signInFailure,
  signUpSuccess,
  removeClass,
  addClass,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  addClassBoard,
  removeClassSignin
}
