let miDepartamento;
let trabajadores = [];

    fetch('https://jsonblob.com/api/1298700766326677504')
      .then(response => response.json())
        .then(empresa => {
            miDepartamento = empresa.departamento;
            trabajadores = empresa.trabajadores;
            console.log(miDepartamento);
            console.log(trabajadores);
    });