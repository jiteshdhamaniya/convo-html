// For Auto-collapsing Navbar
var navbar = document.querySelector('navbar');
var offsetY = 100;
window.addEventListener('scroll', (e) => {
    if (window.pageYOffset > offsetY) {
        navbar.classList.remove('active')
    } else {
        navbar.classList.add('active')
    }
    offsetY = window.pageYOffset > 100 ? window.pageYOffset : 100
})


//For side-nav toggle
var asideMenu = document.querySelector('aside')

var toggler = document.querySelector('navbar>i')
toggler.addEventListener('click', (e) => {
    updateUi()
})

var togglerMenuItem = document.querySelector('aside > ul > li > i.fa-times')
togglerMenuItem.addEventListener('click', (e) => {
    updateUi()
})

var overlay = document.querySelector('div.overlay');
overlay.addEventListener('click', () => {
    updateUi()
})

const updateUi = () => {
    asideMenu.classList.toggle('hide-aside')
    overlay.classList.toggle('hide-overlay')
}