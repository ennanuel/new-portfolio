const headers = document.getElementsByTagName('header')
const headerSm = document.getElementById('header-sm')
const headerLg = document.getElementById('header-lg')
const navigation = document.querySelector('.navigation')
const menuBtn = document.querySelector('.menu-btn')
const navigationLinks = document.getElementsByClassName('navigation-link')

let scrollY = 0;

const handleScroll = () => {
    if(window.scrollY > scrollY) {
        [...headers].forEach( header => header.classList.add('scrolled') )
    } else {
        [...headers].forEach( header => header.classList.remove('scrolled') );
    }

    if(window.scrollY < scrollY && window.scrollY !== 0) {
        navigation.classList.add('hide-navigate')
    } else {
        navigation.classList.remove('hide-navigate')
    }

    scrollY = window.scrollY
}

const handleClick = () => {
    headerSm.classList.toggle('show-menu')
}

const observerFunction = (entries) => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting) return;
        const currentPage = entry.target.getAttribute('i');

        [...headerLg.getElementsByClassName('nav-link')].forEach( (navLink, i) => {
            navLink.classList.remove('active-nav')
            if(currentPage == i + 1) {
                navLink.classList.add('active-nav')
            }
        });

        [...headerSm.getElementsByClassName('nav-link')].forEach( (navLink, i) => {
            navLink.classList.remove('active-nav')
            if(currentPage == i + 1) {
                navLink.classList.add('active-nav')
            }
        });

        [...navigationLinks].forEach( ((navigationLink, i) => {
            navigationLink.classList.remove('active-navigation')
            if(currentPage == i) {
                navigationLink.classList.add('active-navigation')
            }
        }))
    })
}

[...headerSm.getElementsByClassName('nav-link')].forEach( navLink => {
    navLink.addEventListener('click', () => headerSm.classList.remove('show-menu'))
})

menuBtn.addEventListener('click', handleClick)

window.addEventListener('scroll', handleScroll)

let options = {
    rootMargin: '-100px',
}

const observe = new IntersectionObserver(observerFunction, options)

const sections = document.getElementsByClassName('section');

[...sections].forEach((section, i) => {
    section.setAttribute('i', i)
    observe.observe(section)
})