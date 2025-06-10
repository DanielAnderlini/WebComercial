// main.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Inicializa EmailJS (reemplaza 'TU_USER_ID' por tu userID de EmailJS)
    emailjs.init('TU_USER_ID');
    // Manejo del formulario de contacto

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            emailjs.sendForm('service_o8anyy4', 'TU_TEMPLATE_ID', form)
                .then(function() {
                    document.getElementById('contact-status').textContent = 'Mensaje enviado correctamente.';
                    form.reset();
                }, function(error) {
                    document.getElementById('contact-status').textContent = 'Error al enviar el mensaje. Intenta nuevamente.';
                });
        });
    }
});