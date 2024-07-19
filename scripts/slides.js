const slides = document.querySelectorAll('section div.slides')

slides.forEach((slide) => {
  let current = 0
  let z = 100000000

  const images = slide.querySelectorAll('img')

  images.forEach((image) => {
    z--
    image.style.zIndex = z
  })

  const timeline = gsap.timeline()

  timeline
    .set(images, {
      x: () => {
        return 500 * Math.random() - 250
      },
      y: '500%',
      rotation: () => {
        return 90 * Math.random() - 45
      },
    })
    .to(images, { x: 0, y: 0, stagger: -0.25 })
    .to(images, {
      rotation: () => {
        return 12 * Math.random() - 6
      },
    })

  slide.addEventListener('click', (e) => {
    z--
    images[current].style.zIndex = z
    current++
    current = current % images.length
  })
})
