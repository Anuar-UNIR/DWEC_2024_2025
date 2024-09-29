document.addEventListener('DOMContentLoaded', function (event) {
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform custom validation logic
    const nombre = document.getElementById('nombre').value;
    const edad = Number(document.getElementById('edad').value);
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;


    if (!validarEmail(email)) {
        alert('Introduzca un email valido.');
        return;
    }

    if (nombre.length < 3) {
        alert('El nombre debe de tener al menos 3 caracteres.');
        return;
    }

    if (!validarTelefono(telefono)) {
        alert('Introduzca un numero de telefono con 9 digitos.');
        return;
    }

    if (edad < 0 || edad > 120) {
        alert('Introduzca una edad correcta entre 0 y 120.');
        return;
    }

    // If validation passes, submit the form
    form.submit();
});

});

function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

 
function validarTelefono(telefono){
    const telefonoRegex = /^[0-9]{9}$/;
    return telefonoRegex.test(telefono);
}