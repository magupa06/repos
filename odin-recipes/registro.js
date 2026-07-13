const formRegistro = document.querySelector("#form-registro");
const campoNombre = document.querySelector("#nombre");
const campoApellido = document.querySelector("#apellido");
const campoGmail = document.querySelector("#gmail");
const campoEdad = document.querySelector("#edad");
const campoCiudad = document.querySelector("#ciudad");

formRegistro.onsubmit = function (evento) {
    evento.preventDefault();

    const edad = parseInt(campoEdad.value, 10);

    if (edad < 10) {
        alert("Se necesita la autorizacion de un adulto para registrarte.");
        window.location.href = "index.html";
        return;
    }

    localStorage.setItem("nombre", campoNombre.value.trim());
    localStorage.setItem("apellido", campoApellido.value.trim());
    localStorage.setItem("gmail", campoGmail.value.trim());
    localStorage.setItem("edad", campoEdad.value.trim());
    localStorage.setItem("ciudad", campoCiudad.value.trim());

    window.location.href = "index.html";
}
