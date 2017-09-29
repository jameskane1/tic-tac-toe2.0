'use strict'
const store = require('./store')

const signUpSuccess = function (data) {
  $('#message').text('you have successfully signed up!')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#message').text('Your signup was unseccessful. Please try again.', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Incorrect Email or PW', error)
}

const removeClass = function () {
  $('#change-password').removeClass('gameboard')
  $('#signoutbutton').removeClass('gameboard')
  $('#newGameButton').removeClass('gameboard')
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
  $('#signoutbutton').addClass('gameboard')
  $('#newGameButton').addClass('gameboard')
  $('#gamesPlayedMessage').addClass('gameboard')
}
const startNewGame = function () {
  $('#gameboard').removeClass('gameboard')
  $('#gamesPlayedMessage').removeClass('gameboard')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed Password successfully')
}

const changePasswordFailure = function (error) {
  $('#message').text('Incorrect PW. Please try again', error)
}

const signOutSuccess = function () {
  // console.log(data)
  $('#message').text('You have successfully signed out')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Unable to sign out. Please try again', error)
}

const newGameSuccess = function (data) {
  store.game = data.game
  $('#message').text('You have successfully created a new game!')
}

const newGameFailure = function (error) {
  $('#message').text('We were unable to start a new game. Please try again', error)
}

const updateGameSuccess = function (data) {
  store.game = data.game
}

const updateGameFailure = function (error) {
  $('#message').text('We were unable to track your move, your error was', error)
}

const gameTrackerSuccess = function (data) {
  $('#gamesPlayedMessage').text('This is your total games played! ' + data.games.length)
  console.log('this is data!!!', data)
}

const gameTrackerFailure = function (error) {
  $('#gamesPlayedMessage').text('Total games played cannot be displayed', error)
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
  removeClassSignin,
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameFailure,
  startNewGame,
  gameTrackerSuccess,
  gameTrackerFailure
}
