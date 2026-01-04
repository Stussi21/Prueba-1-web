document.addEventListener('DOMContentLoaded', () => {
    const verMenuBtn = document.getElementById('verMenuBtn');
    const cerrarMenuBtn = document.getElementById('cerrarMenuBtn');
    const menuSection = document.getElementById('menu-section');
    const mainContent = document.querySelector('main');
    const body = document.body;

    verMenuBtn.addEventListener('click', () => {
        menuSection.classList.remove('hidden'); // Muestra la sección del menú
        body.style.overflow = 'hidden'; // Evita el scroll del fondo
        // Opcional: difuminar o oscurecer el fondo
        mainContent.style.filter = 'blur(5px)';
        mainContent.style.pointerEvents = 'none'; // Deshabilita clics en el fondo
    });

    cerrarMenuBtn.addEventListener('click', () => {
        menuSection.classList.add('hidden'); // Oculta la sección del menú
        body.style.overflow = 'auto'; // Permite el scroll de nuevo
        // Restablecer el fondo
        mainContent.style.filter = 'none';
        mainContent.style.pointerEvents = 'auto';
    });
});
