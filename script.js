gsap.set('.new_section_list img', {
  y: 30,
  opacity: 0
})

gsap.set('.new_section_list h2', {
  y: 30,
  opacity: 0
})

gsap.set('.new_section_list div', {
  y: 30,
  opacity: 0
})


gsap.to('.new_section_list img', 1, {
  y: 0,
  opacity: 1
})

gsap.to('.new_section_list h2', 1, {
  y: 0,
  opacity: 1
})

gsap.to('.new_section_list div', 1, {
  y: 0,
  opacity: 1
})


const sections = document.querySelectorAll('section')
sections.forEach(el => {
  gsap.from(el, .5, {
    opacity: 0,
    y: 20,
    // scale: .8,
    // ease: 'back',
    scrollTrigger: {
      trigger: el,
      start: 'top center',
      // markers: true
    }
  })
})