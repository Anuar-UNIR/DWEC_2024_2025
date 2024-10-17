var usuarios = [];

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

});