const navbar = document.getElementById('navbar');
const toggleBtn = document.getElementById('toggle-btn');
const btnLine = document.getElementById('nav_btn');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    btnLine.classList.toString('rotate');
})