import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); //prevenir el funcionamiento normal de un formulario
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(nombre,"-", email);
    clientServices.crearCliente(nombre, email).then( respuesta => {
        console.log(respuesta)
    } ).catch( (error) => console.log(error) )
});

