document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.sidebar li');
    const pages = document.querySelectorAll('.crud-page');

    // Inicializamos: ocultamos todas menos la activa
    pages.forEach(page => {
        if (!page.classList.contains('active')) {
            page.style.display = 'none';
        }
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Si ya está activo, no hacemos nada
            if (item.classList.contains('active')) return;

            // Cambiamos la clase activa del menú
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const targetId = item.getAttribute('data-target');

            pages.forEach(page => {
                if (page.id === targetId) {
                    // Mostramos la sección con transición
                    page.style.display = 'block';
                    page.style.opacity = 0;
                    requestAnimationFrame(() => {
                        page.style.transition = 'opacity 0.3s ease';
                        page.style.opacity = 1;
                    });
                    page.classList.add('active');
                } else {
                    // Ocultamos las demás
                    page.style.transition = '';
                    page.style.opacity = '';
                    page.style.display = 'none';
                    page.classList.remove('active');
                }
            });
        });
    });
});
