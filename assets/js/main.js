/*==================== MENU SHOW Y HIDDEN ====================*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if ($('#nav-toggle')) {
  $('#nav-toggle').on('click', () => {
    $('#nav-menu').addClass('show-menu');
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if ($('#nav-close')) {
  $('#nav-close').on('click', () => {
    $('#nav-menu').removeClass('show-menu');
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
$('.nav-link').on('click', () => {
  $('#nav-menu').removeClass('show-menu');
});

/*==================== ACCORDION SKILLS ====================*/
const toggleSkills = (ref) => {
  if (ref.className == 'skills-content skills-close') {
    ref.className = 'skills-content skills-open';
  } else {
    ref.className = 'skills-content skills-close';
  }
}

/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services-modal');
const modalBtns = document.querySelectorAll('.services-button');
const modalCloses = document.querySelectorAll('.services-modal-close');

const openModal = (clickedModal) => {
  modalViews[clickedModal].classList.add('services-modal-active')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    openModal(i)
  })
});

modalCloses.forEach(modalClose => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach(modalView => {
      modalView.classList.remove('services-modal-active')
    })
  })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio-container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 