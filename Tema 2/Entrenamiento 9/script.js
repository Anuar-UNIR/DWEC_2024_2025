// Función para obtener los usuarios de la API
async function fetchUsers() {
  try {
    // URL de la API REST pública
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    // Verificamos si la respuesta es exitosa
    if (!response.ok) {
      throw new Error('Error al obtener los usuarios');
    }

    // Convertimos la respuesta en JSON
    const users = await response.json();

    // Llamamos a la función para mostrar los usuarios
    displayUsers(users);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Función para mostrar los usuarios en el HTML
function displayUsers(users) {
  const userList = document.getElementById('user-list');

  // Limpiar contenido previo
  userList.innerHTML = '';

  // Recorrer el array de usuarios y crear elementos HTML para cada uno
  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.className = 'user';

    const h2 = document.createElement('h2');
    h2.textContent = user.name;
      
    const email = document.createElement('p');
    email.innerHTML = `<strong>Email:</strong> ${user.email}`

    const telefono = document.createElement('p');
    telefono.innerHTML = `<strong>Teléfono:</strong> ${user.phone}`
      
    const compañia = document.createElement('p');
    compañia.innerHTML = `<strong>Compañia:</strong> ${user.company.name}`
    
    userDiv.append(h2);
    userDiv.append(email);
    userDiv.append(telefono);
    userDiv.appendChild(compañia);
    

    // Agregar el elemento creado al contenedor
    userList.append(userDiv);
  });
}

// Llamar a la función para obtener los usuarios al cargar la página
window.onload = fetchUsers;
