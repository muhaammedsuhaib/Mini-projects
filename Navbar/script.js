const menuToggle = document.querySelector('.menu_toggle');
const navMenu = document.querySelector('.nav_menu');

menuToggle.addEventListener('click',()=>{
 navMenu.classList.toggle('active');
});