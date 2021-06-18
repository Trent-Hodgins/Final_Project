let rectL = 0
let rectB = 0
let rectH = 0
let rectArea = 0
let rectVolume = 0
// These make the variables that the program needs. This inculdes the length, base, height, area, and volume.//

document.getElementById('rectButton').addEventListener('click', rectAreaMath)
// This is for connecting the rectAreaMath function with the rectButton.//

document.getElementById('rectButton').addEventListener('click', rectAreaWord)
// This is for connecting the rectAreaWord function with the rectButton.//

document.getElementById('rectButton').addEventListener('click', rectVolumeMath)
// This is for connecting the rectVolumeMath function with the rectButton.//

document.getElementById('rectButton').addEventListener('click', rectVolumeWord)
// This is for connecting the rectVolumeWord function with the rectButton.//

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
  rectL = document.getElementById('rectL').value

  rectB = document.getElementById('rectB').value

  rectH = document.getElementById('rectH').value

  rectL = parseInt(rectL)

  rectB = parseInt(rectB)

  rectH = parseInt(rectH)

  rectArea = (rectB * rectL + rectB * rectH + rectL * rectH) * 2
  
  document.getElementById('rectArea').innerHTML = rectArea
}
// This is the math that happends when the rectButton is pressed.//

function rectVolumeMath () {
  rectL = document.getElementById('rectL').value

  rectB = document.getElementById('rectB').value

  rectH = document.getElementById('rectH').value

  rectL = parseInt(rectL)

  rectB = parseInt(rectB)

  rectH = parseInt(rectH)

  rectVolume = rectL * rectB * rectH
  
  document.getElementById('rectVolume').innerHTML = rectVolume
}
// This is the math that happends when the rectButton is pressed.//

function rectAreaWord () {
  document.getElementById('rectAreaWord').innerHTML = 'Area = '
}
// This function is for adding "Area = " before the area.//

function rectVolumeWord () {
  document.getElementById('rectVolumeWord').innerHTML = 'Volume = '
}
// This function if forr adding "Volume = " before the volume.//
