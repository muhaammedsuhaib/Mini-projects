document.addEventListener('DOMContentLoaded', function() {
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    const body = document.body;

    // Check if dark mode preference is stored in localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    toggleDarkModeButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // Save dark mode preference to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});
