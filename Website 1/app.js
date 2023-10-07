const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('navbar__menu')

//Display Mobile Menu
const moblieMenu = () => {
    menu.classList.toggle('is.active')
    menuLinks.classList.toggle('is.active')
}

menu.addEventListener('click', moblieMenu);