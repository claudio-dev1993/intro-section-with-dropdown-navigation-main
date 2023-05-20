
function openNav() {
    document.getElementById('navLinks').style.width = '240px'
    document.querySelector('.navbar__collapse').style.width = '100%'
    document.querySelector('.navbar__collapse').style.backgroundColor = "rgba(0,0,0,0.75)";
}
document.getElementById('openMenu').addEventListener('click', () => {
    openNav()
})

function closeNav() {
    document.getElementById('navLinks').style.width = '0'
    document.querySelector('.navbar__collapse').style.width = '0'
}
document.getElementById('closeMenu').addEventListener('click', () => {
    closeNav()
})

document.getElementById('features').addEventListener('click', () => {
    const menuFeatures = document.querySelector('.navbar-menu__features')
    if (menuFeatures.classList.contains('hide-menu')) {
        menuFeatures.classList.add('show-menu')
        menuFeatures.classList.remove('hide-menu')
    } else {
        menuFeatures.classList.add('hide-menu')
        menuFeatures.classList.remove('show-menu')
    }
})

document.getElementById('company').addEventListener('click', () => {
    const menuCompany = document.querySelector('.navbar-menu__company')
    if (menuCompany.classList.contains('hide-menu')) {
        menuCompany.classList.add('show-menu')
        menuCompany.classList.remove('hide-menu')
    } else {
        menuCompany.classList.add('hide-menu')
        menuCompany.classList.remove('show-menu')
    }
})