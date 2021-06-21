document.getElementById('circle').addEventListener('click', circle)
document.getElementById('trapezoid').addEventListener('click', trapezoid)
document.getElementById('rectangular').addEventListener('click', rectangular)
document.getElementById('triangle').addEventListener('click', triangle)
document.getElementById('cone').addEventListener('click', cone)
let answer = true
// The event listeners are for each of the different pages that my webage has. They link buttons to the different URLs of my website. So far there are four. Each page of my website is a different shape calculator.//

function circle () {
  answer = confirm('Circle')
  if (answer) {
    window.location = 'https://finalproject.trenthodgins.repl.co/cir.html'
  }
}

function trapezoid () {
  answer = confirm('Trapezoid')
  if (answer) {
    window.location = 'https://finalproject.trenthodgins.repl.co/trap.html'
  }
}

function rectangular () {
  answer = confirm('Rectangular Prism')
  if (answer) {
    window.location = 'https://finalproject.trenthodgins.repl.co/rect.html'
  }
}

function triangle () {
  answer = confirm('Triangle')
  if (answer) {
    window.location = 'https://finalproject.trenthodgins.repl.co/tri.html'
  }
}

function cone () {
  answer = confirm('Cone')
  if (answer) {
    window.location = 'https://finalproject.trenthodgins.repl.co/cone.html'
  }
}
// These functions are roughly the same. They each move the user to a different page of the website.//
