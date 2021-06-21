let coneR = 0
let coneH = 0
let coneV = 0
let coneRadius = 0
let coneHeight = 0
let coneVolume = 0
let ind = true
// These make the variables that the program needs. This inculdes the radius, height, and volume.//

document.getElementById('cone-radius-button').addEventListener('click', coneRadiusMath)
// This is for connecting the coneRadiusMath function with the coneRadiusButton.//

document.getElementById('cone-radius-button').addEventListener('click', coneRadiusWord)
// This is for connecting the roneRadiusWord function with the coneRadiusButton.//

document.getElementById('cone-height-button').addEventListener('click', coneHeightMath)
// This is for connecting the coneHeightMath function with the coneHeightButton.//

document.getElementById('cone-height-button').addEventListener('click', coneHeightWord)
// This is for connecting the coneHeightWord function with the coneHeightButton.//

document.getElementById('cone-volume-button').addEventListener('click', coneVolumeMath)
// This is for connecting the coneVolumeMath function with the coneVolumeButton.//

document.getElementById('cone-volume-button').addEventListener('click', coneVolumeWord)
// This is for connecting the coneVolumeWord function with the coneVolumeButton.//

document.getElementById('index').addEventListener('click', index)
// This line connects the Home button to the index function.//

function index () {
  ind = confirm('Home')
  if (ind) {
    window.location = 'https://finalproject.trenthodgins.repl.co/'
  }
}
// This is the function that makes the "Home" button ask the user if they want to go to the home page. If they click "OK" they are brought to the home page.//

function coneRadiusMath () {
  coneV = document.getElementById('cone-v').value

  coneH = document.getElementById('cone-h').value

  coneV = parseInt(coneV)

  coneH = parseInt(coneH)

  coneRadius = Math.sqrt( 3 * (coneV / (Math.PI * coneH)))

  document.getElementById('cone-radius').innerHTML = coneRadius
}
// This is the math that happends when the cone-radius-button is pressed.//

function coneHeightMath () {
  coneR = document.getElementById('cone-r').value

  coneV = document.getElementById('cone-v').value

  coneR = parseInt(coneR)

  coneV = parseInt(coneV)

  coneHeight = 3 * (coneV / (Math.PI * (coneR * coneR)))

  document.getElementById('cone-height').innerHTML = coneHeight
}
// This is the math that happends when the cone-height-button is pressed.//

function coneVolumeMath () {
  coneR = document.getElementById('cone-r').value

  coneH = document.getElementById('cone-h').value

  coneR = parseInt(coneR)

  coneH = parseInt(coneH)

  coneVolume = Math.PI * (coneR * coneR) * (coneH / 3)

  document.getElementById('cone-volume').innerHTML = coneVolume
}
// This is the math that happends when the cone-volume-button is pressed.//

function coneRadiusWord () {
  document.getElementById('cone-radius-word').innerHTML = 'Radius = '
}
// This function is for adding "radius = " before the radius.//

function coneHeightWord () {
  document.getElementById('cone-height-word').innerHTML = 'Height = '
}
// This function if forr adding "Height = " before the height.//

function coneVolumeWord () {
  document.getElementById('cone-volume-word').innerHTML = 'Volume = '
}
// This function if forr adding "Volume = " before the volume.//
