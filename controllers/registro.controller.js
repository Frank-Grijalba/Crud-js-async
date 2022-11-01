import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); //prevenir q el formulario haga la petición ya que nosotros lo haremos a través de javascript 
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    clientServices.crearCliente(nombre, email).then(() => {
        window.location.href = "/screens/registro_completado.html";
    }).catch( (error) => console.log(error) );
});

