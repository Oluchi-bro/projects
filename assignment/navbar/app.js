const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function () {

  // you can either use this one or
  // if (links.classList.contains('show-links')) {
  //   links.classList.remove('show-links')
  // } else {
  //   links.classList.add('show-links')
  // }

  // you can use this one they will both toggle the header
  links.classList.toggle('show-links')
})