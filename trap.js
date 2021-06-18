let trapAnswer = 0
let trapA = 0
let trapB = 0
let trapH = 0
let ind = true
// Let makes the variable. Three of the "lets" is for what the user types in and the other is for the answer.//

document.getElementById('trapButton').addEventListener('click', trapMultiplication)
// This line is for making the code calculate once the button is clicked.//
document.getElementById('index').addEventListener('click', index)
// This line connects the Home button to the "Home" URL.//


function index () {
  ind = confirm('Home')
  if (ind) {
    window.location = 'https://finalproject.trenthodgins.repl.co/'
  }
}
// This is the function that makes the "Home" button ask the user if they want to go to the home page. If they click "OK" they are brought to the home page.//

function trapMultiplication () {
  trapA = document.getElementById('trapA').value

  trapB = document.getElementById('trapB').value

  trapH = document.getElementById('trapH').value

  trapA = parseInt(trapA)

  trapB = parseInt(trapB)

  trapH = parseInt(trapH)

  trapAnswer = trapH * (trapA + trapB) * 1 / 2

  document.getElementById('trapAnswer').innerHTML = trapAnswer
}
// The function is for the math. The "answer" is for what equation the function is doing. Lastly, the answer will appear in the paragraph with the matching id.//
