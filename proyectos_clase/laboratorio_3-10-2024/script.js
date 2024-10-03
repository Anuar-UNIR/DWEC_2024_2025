
document.addEventListener('DOMContentLoaded', function (event) {
    
    const form = document.getElementById("miformulario");
    //const form2 = document.querySelector('form'); //ejemplo para acceder al formulario con query selector

    const nombre = document.getElementById("nombre");
    const edad = document.getElementById("edad");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");

    form.addEventListener('submit', function (event) {

        if (nombre.value.length < 3) {
            alert("El nombre debe de tener al menos 3 caracteres");
            return;
        }

        if (!validarEMail(email.value)) {
            alert("Introduzca un email correcto");
            return;
        }

        if (!validarTelefono(telefono.value))
        {
            alert("Introduzca un telefono de 9 digitos");
            return;
        }


        let edadN = Number(edad.value);
        if (edadN < 0 || edadN >120) {
            alert("Introduzca una edad entre 0 y 120");
            return;
        }

        form.submit();
    });

    nombre.addEventListener('blur', function (event) {
        
        if (nombre.value.length < 3) {
            alert("El nombre debe de tener al menos 3 caracteres");
            
        }
   
    });

});



function validarEMail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validarTelefono(telefono){
    const telefonoRegex = /^[0-9]{9}$/;
    return telefonoRegex.test(telefono);
}

// expresion_regular_dni = /^\d{8}[a-zA-Z]$/;