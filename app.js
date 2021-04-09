const toggleButton = document.getElementsByClassName('toggleBtn')[0]
const nav_Links = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
    nav_Links.classList.toggle('active')
})