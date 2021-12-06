const btn = document.getElementById('nav__menu-m');

function toggleMenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

btn.addEventListener('click', toggleMenu)