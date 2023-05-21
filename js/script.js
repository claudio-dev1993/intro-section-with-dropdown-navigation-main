
function switchArrow() {
   const options = document.querySelectorAll('.navbar-options__button')
   options.forEach( op => {
    if (op.classList.contains('arrow-down')) {
        op.classList.replace('arrow-down', 'arrow-up')
   } else {
        op.classList.replace('arrow-up', 'arrow-down')
   }
   })
}
function openNav() {
    if (window.screen.width.valueOf() < 768) {
        document.getElementById('navLinks').style.width = '240px'
    } else {
        document.getElementById('navLinks').style.width = '480px'
    }
    document.querySelector('.navbar__collapse').style.width = '100%'
    document.querySelector('.navbar__collapse').style.backgroundColor = "rgba(0,0,0,0.75)";
}
function closeNav() {
    document.getElementById('navLinks').style.width = '0'
    document.querySelector('.navbar__collapse').style.width = '0'
}

document.getElementById('openMenu').addEventListener('click', () => {
    openNav()
})

document.getElementById('closeMenu').addEventListener('click', () => {
    closeNav()
})

document.getElementById('features').addEventListener('click', () => {
    const menuFeatures = document.querySelector('.navbar-dropdown-menu__features')
    if (menuFeatures.classList.contains('hide-menu')) {
        menuFeatures.classList.replace('hide-menu','show-menu')
    } else {
        menuFeatures.classList.replace('show-menu', 'hide-menu')
    }
    switchArrow()
})

document.getElementById('company').addEventListener('click', () => {
    const menuCompany = document.querySelector('.navbar-dropdown-menu__company')
    if (menuCompany.classList.contains('hide-menu')) {
        menuCompany.classList.replace('hide-menu','show-menu')
    } else {
        menuCompany.classList.replace('show-menu', 'hide-menu')
    }
    switchArrow()
})