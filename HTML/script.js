document.addEventListener('DOMContentLoaded', function() {
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    const body = document.body;
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    // Check if dark mode preference is stored in localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    toggleDarkModeButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
    });

    hamburger.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});
