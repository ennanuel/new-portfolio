const header = document.getElementById('header')
let scrollY = 0;
const handleScroll = () => {
    header.style.transform = window.scrollY > scrollY ? "translateY(-100%)" : "translateY(0)"
    scrollY = window.scrollY
}

window.addEventListener('scroll', handleScroll)