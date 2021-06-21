let cirD = 0
const quater = 0.25
let cirCir = 0
let cirArea = 0
let ind = true
// Let makes the variables.//

document.getElementById('cir-a').addEventListener('click', cirAr)
// This line connects the the Circle Area button to the right calculation.//

document.getElementById('cir-c').addEventListener('click', cirCi)
// This line connects the the Circumference button to the right calculation.//

document.getElementById('index').addEventListener('click', index)
// This line connects the Home button to the index function.//

function index () {
  ind = confirm('Home')
  if (ind) {
    window.location = 'https://finalproject.trenthodgins.repl.co/'
  }
}
// This is the function that makes the "Home" button ask the user if they want to go to the home page. If they click "OK" they are brought to the home page.//

function cirAr () {
  cirD = document.getElementById('cir-d').value

  cirArea = parseInt(cirArea)

  cirD = parseInt(cirD)

  cirArea = quater * Math.PI * cirD * cirD

  document.getElementById('cir-area').innerHTML = cirArea
}
// These are for the equation and putting the answer on screen.//

function cirCi () {
  cirD = document.getElementById('cir-d').value

  cirCir = parseInt(cirCir)

  cirD = parseInt(cirD)

  cirCir = Math.PI * cirD

  document.getElementById('cir-cir').innerHTML = cirCir
}
// These are for the equation and putting the answer on screen.//
