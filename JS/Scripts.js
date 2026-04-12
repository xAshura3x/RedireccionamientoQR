// Inicializar EmailJS con tu clave pública
emailjs.init("HI-92bgvDkJBix5R1"); // Reemplaza con tu clave pública de EmailJS

// Obtener elementos del DOM
const emailBtn = document.getElementById('email-btn');
const modal = document.getElementById('email-modal');
const closeBtn = document.getElementsByClassName('close')[0];
const emailForm = document.getElementById('email-form');

// Abrir modal al hacer clic en el botón de correo
emailBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Cerrar modal al hacer clic en la X
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Auto-resize textarea basado en el contenido
const messageTextarea = document.getElementById('message');
messageTextarea.addEventListener('input', () => {
    messageTextarea.style.height = 'auto';
    messageTextarea.style.height = messageTextarea.scrollHeight + 'px';
});

// Enviar formulario con EmailJS
emailForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Parámetros del template
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        to_email: 'osmarchantg@gmail.com' // Correo de destino
    };

    // Enviar email
    emailjs.send('service_5bphcwa', 'template_asil4fg', templateParams) // Reemplaza con tus IDs
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Correo enviado exitosamente!');
            modal.style.display = 'none';
            emailForm.reset();
        }, (error) => {
            console.log('FAILED...', error);
            alert('Error al enviar el correo. Inténtalo de nuevo.');
        });
});