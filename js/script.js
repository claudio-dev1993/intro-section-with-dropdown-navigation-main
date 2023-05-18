
function openNav() {
    document.getElementById('navLinks').style.width = '240px'
    document.body.style.backgroundColor = "rgba(0,0,0,0.75)";
}
document.getElementById('openMenu').addEventListener('click', () => {
    openNav()
})

function closeNav() {
    document.getElementById('navLinks').style.width = '0'
    document.body.style.backgroundColor = "#fff";
}
document.getElementById('closeMenu').addEventListener('click', () => {
    closeNav()
})

function openDropdown() {
    document.querySelector('.navbar-dropdown-menu').classList.add('show')
}

document.getElementById('features').addEventListener('click', () => {
    if (document.querySelector('.navbar-menu__features').classList.contains('hide-menu')) {
        document.querySelector('.navbar-menu__features').classList.add('show-menu')
        document.querySelector('.navbar-menu__features').classList.remove('hide-menu')
    } else {
        document.querySelector('.navbar-menu__features').classList.add('hide-menu')
        document.querySelector('.navbar-menu__features').classList.remove('show-menu')
    }
})

document.getElementById('company').addEventListener('click', () => {
    if (document.querySelector('.navbar-menu__company').classList.contains('hide-menu')) {
        document.querySelector('.navbar-menu__company').classList.add('show-menu')
        document.querySelector('.navbar-menu__company').classList.remove('hide-menu')
    } else {
        document.querySelector('.navbar-menu__company').classList.add('hide-menu')
        document.querySelector('.navbar-menu__company').classList.remove('show-menu')
    }
})