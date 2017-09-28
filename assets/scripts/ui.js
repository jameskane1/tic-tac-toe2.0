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
}

const addClass = function () {
  $('#sign-in-submit').addClass('gameboard')
  $('#sign-up-submit').addClass('gameboard')
}

export {
  signUpFailure,
  signInSuccess,
  signInFailure,
  signUpSuccess,
  removeClass,
  addClass
}
