// Switch between login and signup forms
document.getElementById('show-signup').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
});

document.getElementById('show-login').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

// Form submission handling
document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Aquí normalmente enviarías los datos al servidor
    console.log('Inicio de sesión:', { email, password });
    alert('Formulario de inicio de sesión enviado');
});

document.getElementById('signup').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    
    if (password !== confirm) {
        alert('Las contraseñas no coinciden');
        return;
    }
    
    // Aquí normalmente enviarías los datos al servidor
    console.log('Registro:', { name, email, password });
    alert('Formulario de registro enviado');
});

// Manejador para los botones de redes sociales
const socialButtons = document.querySelectorAll('.social-btn');

socialButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Identificar la red social por su clase
        const classList = this.classList;
        let socialNetwork = '';
        
        if (classList.contains('facebook')) socialNetwork = 'Facebook';
        else if (classList.contains('google')) socialNetwork = 'Google';
        else if (classList.contains('apple')) socialNetwork = 'Apple';
        else if (classList.contains('twitter')) socialNetwork = 'Twitter';
        
        // En una implementación real, aquí redirigirías al usuario al proveedor de autenticación
        console.log(`Iniciando autenticación con ${socialNetwork}`);
        
        // Añadir efecto visual al hacer clic
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
            
            // Redirección o autenticación según la red social
            switch(socialNetwork.toLowerCase()) {
                case 'facebook':
                    // window.location.href = '/auth/facebook';
                    alert('Redirigiendo a autenticación de Facebook...');
                    break;
                case 'google':
                    // window.location.href = '/auth/google';
                    alert('Redirigiendo a autenticación de Google...');
                    break;
                case 'apple':
                    // window.location.href = '/auth/apple';
                    alert('Redirigiendo a autenticación de Apple...');
                    break;
                case 'twitter':
                    // window.location.href = '/auth/twitter';
                    alert('Redirigiendo a autenticación de Twitter...');
                    break;
                default:
                    console.error('Red social no reconocida');
            }
        }, 150);
    });
});