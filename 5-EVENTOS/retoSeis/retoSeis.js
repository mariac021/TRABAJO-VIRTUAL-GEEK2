const body = document.querySelector('body');

function changeColorBackground(event) {
  if (event.keyCode === 82) {
    body.classList.add('red');
    body.classList.remove('purple');
  }

  if (event.keyCode === 77 ) {
    body.classList.add('purple');
    body.classList.remove('red');
  }
}

document.addEventListener('keydown', changeColorBackground);