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

    let direction = '150%'
    let midAngle = 15

    if (Math.random() > 0.5) {
      direction = '-150%'
      midAngle = -15
    }

    const currentImage = images[current]

    const flipTimeline = gsap.timeline()

    flipTimeline
      .set(currentImage, { x: 0 })
      .to(currentImage, {
        x: direction,
        rotation: midAngle,
      })
      .set(currentImage, { zIndex: z })
      .to(currentImage, {
        x: 0,
        rotation: () => {
          return 16 * Math.random() - 8
        },
      })

    current++
    current = current % images.length
  })
})
