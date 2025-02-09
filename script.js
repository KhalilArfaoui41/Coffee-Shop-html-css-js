const navLinks = document.querySelectorAll('.nav-menu .nav-link'),
  menuOpenBtn = document.querySelector('#menu-open-button'),
  menuCloseBtn = document.querySelector('#menu-close-button')

menuOpenBtn.addEventListener('click', () => {
  document.body.classList.toggle('show-mobile-menu')
})
menuCloseBtn.addEventListener('click', () => {
  menuOpenBtn.click()
})

/* close sidebar when click navLink */

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuOpenBtn.click()
  })
})

/* slider */

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 25,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  /* responsive */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
})
