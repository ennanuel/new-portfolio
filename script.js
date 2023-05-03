const headerLg = document.getElementById('header-lg')
const headerSm = document.getElementById('header-sm')
const menuBtn = document.querySelector('.menu-btn');

let scrollY = 0;

const handleScroll = () => {
    headerLg.style.transform = window.scrollY > scrollY ? "translateY(-100%)" : "translateY(0)"
    scrollY = window.scrollY
}

const handleClick = () => {
    headerSm.classList.toggle('show-menu')
}

menuBtn.addEventListener('click', handleClick)

window.addEventListener('scroll', handleScroll)
