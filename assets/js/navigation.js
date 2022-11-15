/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const backdrop = document.getElementById('backdrop')


/*===== CONSTANTS =====*/
const SHOW_MENU_CLASS_NAME = '--show'
const SHOW_DROPDOWN_CLASS_NAME = '--show'
/*===== END CONSTANTS =====*/

/*===== DROPDOWN SHOW =====*/
const showBackdrop = () => {
  if (backdrop) {
    backdrop.classList.add(SHOW_DROPDOWN_CLASS_NAME)
  }
}
/*===== END DROPDOWN SHOW =====*/

/*===== DROPDOWN HIDE =====*/
const hideBackdrop = () => {
  if (backdrop) {
    backdrop.classList.remove(SHOW_DROPDOWN_CLASS_NAME)
  }
}

backdrop.addEventListener('click', () => {
    hideMenu()
    hideBackdrop()
  }
)
/*===== END DROPDOWN HIDE =====*/

/*===== MENU SHOW =====*/
/* Validate if constant exists */
const showMenu = () => {
  navMenu.classList.add(SHOW_MENU_CLASS_NAME)
}

const hideMenu = () => {
  navMenu.classList.remove(SHOW_MENU_CLASS_NAME)
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    showMenu()
    showBackdrop()
  })
}
/*===== END MENU SHOW =====*/

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    hideMenu()
    hideBackdrop()
  })
}
/*===== END MENU HIDDEN =====*/

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction () {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  hideMenu()
  hideBackdrop()
}

navLink.forEach(n => n.addEventListener('click', linkAction))
/*==================== END REMOVE MENU MOBILE ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive () {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)
/*==================== END SCROLL SECTIONS ACTIVE LINK ====================*/
