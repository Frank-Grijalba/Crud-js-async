const http = new XMLHttpRequest();

//name_from_variable.open  receive 2 parameters (method, url)
// CRUD - Http methods
// Create - POST
// Read - GET
// Update - PUT
// Delete - DELETE

http.open('GET','http://localhost:3000/perfil');

http.send();

http.onload = () => {
    const data = http.response;
    console.log(data);
}

