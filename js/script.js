
function openNav() {
    document.getElementById('navLinks').style.width = '240px'
    document.getElementById('app').style.marginRight = '240px'
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}



document.getElementById('menuBtn').addEventListener('click', () => {
    openNav()
})