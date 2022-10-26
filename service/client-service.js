const crearNuevaLinea = (nombre, email) => {
    const linea = document.createElement("tr")
    const contenido = `
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
        <ul class="table__button-control">
            <li>
            <a
                href="../screens/editar_cliente.html"
                class="simple-button simple-button--edit"
                >Editar</a
            >
            </li>
            <li>
            <button
                class="simple-button simple-button--delete"
                type="button"
            >
                Eliminar
            </button>
            </li>
        </ul>
        </td>
    `;
    linea.innerHTML = contenido;
    return linea;
}

const tabla = document.querySelector("[data-table]");



//name_from_variable.open  receive 2 parameters (method, url)
// CRUD - Http methods
// Create - POST
// Read - GET
// Update - PUT
// Delete - DELETE

const listaCLientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

listaCLientes().then(
    (data) => {
    data.forEach(
        perfil => {
            const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
            tabla.appendChild(nuevaLinea);
        }
    );
    }
).catch(
    (error) => alert("Ocurrió un error")
  );

