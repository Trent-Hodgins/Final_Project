let triB = 0
let triH = 0
let triA = 0
let triArea = 0
let triHeight = 0
// These make the variables that the program needs. This inculdes the base, height, and area.//

document.getElementById('triAreaButton').addEventListener('click', triAreaMath)
// This is for connecting the triAreaMath function with the triAreaButton.//

document.getElementById('triAreaButton').addEventListener('click', triAreaWord)
// This is for connecting the triAreaWord function with the triAreaButton.//

document.getElementById('triHeightButton').addEventListener('click', triHeightMath)
// This is for connecting the triHeightMath function with the triHeightButton.//

document.getElementById('triHeightButton').addEventListener('click', triHeightWord)
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
  triB = document.getElementById('triB').value

  triH = document.getElementById('triH').value

  triB = parseInt(triB)

  triH = parseInt(triH)

  triArea = 0.5 * triB * triH
  
  document.getElementById('triArea').innerHTML = triArea
}
// This is the math that happends when the triAreaButton is pressed.//

function triHeightMath () {
  triB = document.getElementById('triB').value

  triA = document.getElementById('triA').value

  triB = parseInt(triB)

  triA = parseInt(triA)

  triHeight = 2 * (triA / triB)

  document.getElementById('triHeight').innerHTML = triHeight
}
// This is the math that happends when the triHeightButton is pressed.//

function triAreaWord () {
  document.getElementById('triAreaWord').innerHTML = 'Area = '
}
// This function is for adding "Area = " before the area.//

function triHeightWord () {
  document.getElementById('triHeightWord').innerHTML = 'Height = '
}
// This function if forr adding "Height = " before the height.//
