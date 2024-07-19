const slides = document.querySelector('section div.slides')

let current = 0
let z = 0

const images = slides.querySelectorAll('img')

slides.addEventListener('click', (e) => {
  z++
  images[current].style.zIndex = z
  current++
  current = current % images.length
})
