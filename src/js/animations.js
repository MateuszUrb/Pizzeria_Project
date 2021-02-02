import ScrollReveal from 'scrollreveal'


// hero content && nav
ScrollReveal().reveal('.intro__bg', { delay: 500, distance: '500px', origin: 'top', duration: 1000 })
ScrollReveal().reveal('.intro__content', { delay: 750, distance: '500px', origin: 'left', duration: 1000 })
ScrollReveal().reveal('.intro__nav', { delay: 800, distance: '100%', origin: 'left', duration: 1000 })
ScrollReveal().reveal('.intro__link-hover', { opacity: 1 })
ScrollReveal().reveal('.intro__reservation', { delay: 800, distance: '500px', origin: 'left', duration: 1000 })


// content animations
ScrollReveal().reveal('.content', { delay: 300, distance: '200px', origin: 'bottom', duration: 1500, viewFactor: 0.4 })
ScrollReveal().reveal('.page__img', { duration: 1500, viewFactor: 0.4 })
ScrollReveal().reveal('.video__fireplace', { duration: 1500, viewFactor: 0.4 })


// sub pages animations
ScrollReveal().reveal('.intro-sub', { distance: '100%', origin: 'left', duration: 1500, })
ScrollReveal().reveal('.intro__link-home', { delay: 2000, distance: '100%', origin: 'top', rotate: { y: 360, x: 200 }, duration: 2000 })
