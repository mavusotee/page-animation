document.addEventListener('DOMContentLoaded', () => {
  
  gsap.to('.nav', {
    opacity: 1,
    duration: 1,
    delay: 1,
  })

  gsap.to('.image', {
    opacity: 1,
    y: 30,
    duration: 2.2,
    scale: 1,
    ease: "power4.inOut",
  })
  
  gsap.to('.nav',{
    opacity: 1,
    duration: 1,
  })

  gsap.fromTo('.head',{
    opacity: 0,
    y: "100%",
  },{
    stagger: 1,
    opacity: 1,
    y: "0%",
    duration: 1,
    delay: 2,
  })


  gsap.to('button', {
    opacity: 1,
    duration: 1.5,
    delay: 3,
  })
})

