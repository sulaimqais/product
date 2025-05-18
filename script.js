document.addEventListener('DOMContentLoaded', function() {
    const toggleSidebar = document.getElementById('toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');

    toggleSidebar.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
});
