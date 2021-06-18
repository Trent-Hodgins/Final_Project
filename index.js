document.getElementById('circle').addEventListener('click', circle)
document.getElementById('trapezoid').addEventListener('click', trapezoid)
document.getElementById('cube').addEventListener('click', cube)
let answer = true
// The event listeners are for each of the different pages that my webage has. They link buttons to the different URLs of my website. So far there are three. This is because I have only set up three.//

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

function cube () {
  answer = confirm('Cube')
  if (answer) {
    window.location = 'https://finalproject.trenthodgins.repl.co/cube.html'
  }
}

// These functions are roughly the same. They each move the user to a different page of the website.//
