document.addEventListener('DOMContentLoaded', () => {
    const verMenuBtn = document.getElementById('verMenuBtn');
    const cerrarMenuBtn = document.getElementById('cerrarMenuBtn');
    const menuSection = document.getElementById('menu-section');

    // Al hacer clic en el botón de ver menú
    verMenuBtn.addEventListener('click', () => {
        menuSection.classList.remove('hidden');
        menuSection.style.display = 'block'; // Asegura que se vea
    });

    // Al hacer clic en el botón de cerrar
    cerrarMenuBtn.addEventListener('click', () => {
        menuSection.classList.add('hidden');
        menuSection.style.display = 'none';
    });
});
