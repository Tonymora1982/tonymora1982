const themeSwitchToggle = document.getElementById('theme-switch-toggle');

themeSwitchToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Ejemplo: Código para cambiar el estilo de un enlace al pasar el ratón por encima
document.addEventListener("DOMContentLoaded", function() {
    const sidebarLinks = document.querySelectorAll("#sidebar a");

    sidebarLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            this.style.color = "#007BFF";  // Cambiar el color al azul
        });
        link.addEventListener("mouseout", function() {
            this.style.color = "";  // Restablecer el color
        });
    });
});








