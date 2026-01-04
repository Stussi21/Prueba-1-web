document.addEventListener('DOMContentLoaded', () => {
    const verMenuBtn = document.getElementById('verMenuBtn');
    const cerrarMenuBtn = document.getElementById('cerrarMenuBtn');
    const menuSection = document.getElementById('menu-section');

    verMenuBtn.addEventListener('click', () => {
        menuSection.classList.remove('hidden');
    });

    cerrarMenuBtn.addEventListener('click', () => {
        menuSection.classList.add('hidden');
    });
});
