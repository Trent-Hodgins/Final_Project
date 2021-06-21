let triB = 0
let triH = 0
let triA = 0
let triArea = 0
let triHeight = 0
let ind = true
// These make the variables that the program needs. This inculdes the base, height, and area.//

document.getElementById('tri-area-button').addEventListener('click', triAreaMath)
// This is for connecting the triAreaMath function with the triAreaButton.//

document.getElementById('tri-area-button').addEventListener('click', triAreaWord)
// This is for connecting the triAreaWord function with the triAreaButton.//

document.getElementById('tri-height-button').addEventListener('click', triHeightMath)
// This is for connecting the triHeightMath function with the triHeightButton.//

document.getElementById('tri-height-button').addEventListener('click', triHeightWord)
// This is for connecting the triHeightWord function with the triHeightButton.//

document.getElementById('index').addEventListener('click', index)
// This line connects the Home button to the index function.//

function index () {
  ind = confirm('Home')
  if (ind) {
    window.location = 'https://finalproject.trenthodgins.repl.co/'
  }
}
// This is the function that makes the "Home" button ask the user if they want to go to the home page. If they click "OK" they are brought to the home page.//

function triAreaMath () {
  triB = document.getElementById('tri-b').value

  triH = document.getElementById('tri-h').value

  triB = parseInt(triB)

  triH = parseInt(triH)

  triArea = 0.5 * triB * triH

  document.getElementById('tri-area').innerHTML = triArea
}
// This is the math that happends when the triAreaButton is pressed.//

function triHeightMath () {
  triB = document.getElementById('tri-b').value

  triA = document.getElementById('tri-a').value

  triB = parseInt(triB)

  triA = parseInt(triA)

  triHeight = 2 * (triA / triB)

  document.getElementById('tri-height').innerHTML = triHeight
}
// This is the math that happends when the triHeightButton is pressed.//

function triAreaWord () {
  document.getElementById('tri-area-word').innerHTML = 'Area = '
}
// This function is for adding "Area = " before the area.//

function triHeightWord () {
  document.getElementById('tri-height-word').innerHTML = 'Height = '
}
// This function if forr adding "Height = " before the height.//
