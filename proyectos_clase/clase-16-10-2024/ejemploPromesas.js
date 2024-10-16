//Ejemplo de clases con promesas
var usuarios = [];

let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Se resuelve la promesa despues de un segundo");
    }, 1000);
});


function promesaconDelay(delay) {
    return new Promise((resolve, reject) => {
        
        if (delay > 7000) {
            reject("Error en la promesa");
        }

        setTimeout(() => {
            resolve(`Se resuelve la promesa despues de ${delay} milisegundos`);
        }, delay);
    });
}


promesaconDelay(2000).then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Se ha ejecuta la llamada");
}
);



promesa.then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Se ha ejecuta la llamada");
}
);


function saludar(usuario) {
    console.log("Hola Don/Doña " + usuario);
}


// Utilizando arrow functions
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
        .then(users => {
        //     users.forEach(user => {
        //         saludar(user.name);
            //   });
            usuarios = users;
            usuarios.forEach(usuario => {

                saludar(usuario.email); //Llamada a cualquier funcion
            })
        });
    
        
//https://jsonblob.com/api/1296178912269557760
    fetch('https://jsonblob.com/api/1296178912269557760')
      .then(response => response.json())
        .then(stock => {
            console.log(stock.currency);
            console.log(stock.products);
        });
      


console.log("Final");