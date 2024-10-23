class Departamento{
    #numTrabajadores;
    #trabajadores = [];

    #misTrabajadores;

    

    constructor() {
        this.#numTrabajadores = 0;
        this.#misTrabajadores = new Map(); // objeto de coleccion tipo Map
    }

    contratarTrabajador(trabajador) {
        if (!this.#trabajadores.find((worker) => worker.codigo == trabajador.codigo)) {
            this.#trabajadores.push(trabajador);
        }
    }
}


var usuarios = [];
var trabajadoreEmpresa = [];

document.addEventListener('DOMContentLoaded', function (event) {
    

    function cargarTabla(usuarios) {
        const tablaUsers = document.getElementById("tablaUsuarios");

        usuarios.forEach(user => {
            const userId = document.createElement('td');
            //Puedo generar div (miDiv) con una estructura interna --> userId.append(miDiv)
            userId.innerText = user.id;

            const name = document.createElement('td');
            const parr = document.createElement('p');

            const miDiv = document.createElement('div');
            const miButton = document.createElement('button');
            miButton.textContent = "Check";
            parr.textContent = user.name + "  :  " + user.username;
            miDiv.append(parr, miButton);

            name.appendChild(miDiv);

            miButton.addEventListener('click', function (event) {
                alert("He pulsado el boton " + user.username);
                
            });

            const username = document.createElement('td');
            username.innerText = user.username;

            const email = document.createElement('td');
            email.innerText = user.email;


            const tr = document.createElement('tr');
            tr.append(userId, name, username, email);

            tablaUsers.append(tr);

        });
    }





    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
        .then(users => {
            usuarios = users;
            cargarTabla(usuarios);
        });
    
    
    const miDep = new Departamento();

    let miDepartamento;
    let trabajadores = [];

    fetch('https://jsonblob.com/api/1298700766326677504')
      .then(response => response.json())
        .then(empresa => {
            miDepartamento = empresa.departamento;
            trabajadores = empresa.trabajadores;
            console.log(miDepartamento);
            console.log(trabajadores);
            cargarTablaTrabajadores(trabajadores);

            
        });
    
    function cargarTablaTrabajadores(trabajadores) {
        const tablaTrabajadores = document.getElementById("tablaTrabajadores");

        trabajadores.forEach((trabajador) => {
            
            const worker = {
                cod: trabajador.cod,
                nombre: trabajador.nombre,
                cargo: "Programador",
                salario: trabajador.salario
            }

            let salarioNumericoAnual = Number(worker.salario) * 12;

            
            

            const workerCod = document.createElement('td');
            //Puedo generar div (miDiv) con una estructura interna --> userId.append(miDiv)
            workerCod.innerText = worker.cod;

            const name = document.createElement('td');
            const parr = document.createElement('p');

            const miDiv = document.createElement('div');
            const miButton = document.createElement('button');
            miButton.textContent = "Check";
            parr.textContent = worker.nombre + "  :  " + worker.cargo;
            miDiv.append(parr, miButton);

            name.appendChild(miDiv);

            miButton.addEventListener('click', function (event) {
                alert("He pulsado el boton " + worker.nombre);
                trabajadoreEmpresa.push(worker);
                miDep.contratarTrabajador(worker);

                console.log(trabajadoreEmpresa);
                
            });

            const salario = document.createElement('td');
            salario.innerText = salarioNumericoAnual.toFixed([2]);



            const tr = document.createElement('tr');
            tr.append(workerCod, name, salario);

            tablaTrabajadores.append(tr);


        });
    }

});




//https://jsonblob.com/api/1298700766326677504