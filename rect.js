let rectL = 0
let rectB = 0
let rectH = 0
let rectArea = 0
let rectVolume = 0
let ind = true
// These make the variables that the program needs. This inculdes the length, base, height, area, and volume.//

document.getElementById('rect-button').addEventListener('click', rectAreaMath)
// This is for connecting the rectAreaMath function with the rect-button.//

document.getElementById('rect-button').addEventListener('click', rectAreaWord)
// This is for connecting the rectAreaWord function with the rect-button.//

document.getElementById('rect-button').addEventListener('click', rectVolumeMath)
// This is for connecting the rectVolumeMath function with the rect-button.//

document.getElementById('rect-button').addEventListener('click', rectVolumeWord)
// This is for connecting the rectVolumeWord function with the rect-button.//

document.getElementById('index').addEventListener('click', index)
// This line connects the Home button to the index function.//

function index () {
  ind = confirm('Home')
  if (ind) {
    window.location = 'https://finalproject.trenthodgins.repl.co/'
  }
}
// This is the function that makes the "Home" button ask the user if they want to go to the home page. If they click "OK" they are brought to the home page.//

function rectAreaMath () {
  rectH = document.getElementById('rect-h').value

  rectL = document.getElementById('rect-l').value

  rectB = document.getElementById('rect-b').value

  rectH = parseInt(rectH)

  rectL = parseInt(rectL)

  rectB = parseInt(rectB)

  rectArea = (rectB * rectL + rectB * rectH + rectL * rectH) * 2

  document.getElementById('rect-area').innerHTML = rectArea
}
// This is the math that happends for the area when the rect-button is pressed.//

function rectVolumeMath () {
  rectL = document.getElementById('rect-l').value

  rectB = document.getElementById('rect-b').value

  rectH = document.getElementById('rect-h').value

  rectL = parseInt(rectL)

  rectB = parseInt(rectB)

  rectH = parseInt(rectH)

  rectVolume = rectL * rectB * rectH

  document.getElementById('rect-volume').innerHTML = rectVolume
}
// This is the math that happends for the volume when the rect-button is pressed.//

function rectAreaWord () {
  document.getElementById('rect-area-word').innerHTML = 'Area = '
}
// This function is for adding "Area = " before the area.//

function rectVolumeWord () {
  document.getElementById('rect-volume-word').innerHTML = 'Volume = '
}
// This function if forr adding "Volume = " before the volume.//
