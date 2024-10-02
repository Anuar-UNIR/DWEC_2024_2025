var n = 1;

document.addEventListener('DOMContentLoaded', function (event) {

    //Aqui programar todo el codigo que modifique el DOM
    const sectionPrincipal = document.getElementById('principal');

    const divP = document.createElement('div');
    divP.classList.add('contenedor');
    

    const parrafo1 = document.createElement('p');
    parrafo1.innerText = saludar();
    parrafo1.classList.add('parrafo');

    divP.append(parrafo1);
    
    const btn_1 = document.createElement('button');
    const btn_2 = document.createElement('button');
    const btn_3 = document.createElement('button');

    btn_1.classList.add('btn');
    btn_2.classList.add('btn');
    btn_3.classList.add('btn');

    btn_1.innerText = "Click Me";
    btn_2.innerText = "Click Me";
    btn_3.innerText = "Click Me";

    // const a = document.createElement('a');
    // btn_1.append(a);
    // a.setAttribute('href', 'https://www.w3schools.com/typescript/typescript_arrays.php');

    btn_1.addEventListener('click', function (event) {
        clickButton();
        
    });


    btn_2.addEventListener('click', function (event) {
        clickButton();
    });

    btn_3.addEventListener('click', function (event) {
        clickButton();
    });



    divP.append(btn_1, btn_2, btn_3);





    sectionPrincipal.append(divP);


});


function saludar() {
    return "Hola soy un parrafo";
}

function clickButton() {
    alert("Esto es un boton y lo he pulsado " + n);
    n++;
}