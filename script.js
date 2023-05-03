const headerLg = document.getElementById('header-lg')
const navigation = document.querySelector('.navigation')
const headerSm = document.getElementById('header-sm')
const menuBtn = document.querySelector('.menu-btn')
const navLinks = document.getElementsByClassName('nav-link')
const navigationLinks = document.getElementsByClassName('navigation-link')

let scrollY = 0;

const handleScroll = () => {
    headerLg.style.transform = window.scrollY > scrollY ? "translateY(-100%)" : "translateY(0)"
    navigation.style.transform = window.scrollY > scrollY || window.scrollY === 0 ? "translate(0, -50%)" : "translate(150px, -50%)"
    navigation.style.opacity = window.scrollY > scrollY || window.scrollY === 0 ? "1" : "0"
    scrollY = window.scrollY
}

const handleClick = () => {
    headerSm.classList.toggle('show-menu')
}

menuBtn.addEventListener('click', handleClick)

window.addEventListener('scroll', handleScroll)

const observe = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting) return;
        const currentPage = entry.target.getAttribute('i');
        console.log(currentPage);

        [...navLinks].forEach( (navLink, i) => {
            navLink.classList.remove('active-nav')
            if(currentPage == i + 1) {
                console.log(i, currentPage)
                navLink.classList.add('active-nav')
            }
        });

        [...navigationLinks].forEach( ((navigationLink, i) => {
            navigationLink.classList.remove('active-navigation')
            if(currentPage == i) {
                console.log(i, currentPage)
                navigationLink.classList.add('active-navigation')
            }
        }))
    })
})

const sections = document.getElementsByClassName('section');

[...sections].forEach((section, i) => {
    section.setAttribute('i', i)
    observe.observe(section)
})