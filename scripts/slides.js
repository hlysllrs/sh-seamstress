const slides = document.querySelector('section div.slides')

let current = 0
let z = 100000000

const images = slides.querySelectorAll('img')

images.forEach((image) => {
  z--
  image.style.zIndex = z
})

slides.addEventListener('click', (e) => {
  z--
  images[current].style.zIndex = z
  current++
  current = current % images.length
})
