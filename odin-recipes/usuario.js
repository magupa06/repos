const formUsuario = document.querySelector("#form-usuario");
const campoNombre = document.querySelector("#nombre");
const campoApellido = document.querySelector("#apellido");
const campoGmail = document.querySelector("#gmail");

if (localStorage.getItem("nombre")) {
    campoNombre.value = localStorage.getItem("nombre");
}
if (localStorage.getItem("apellido")) {
    campoApellido.value = localStorage.getItem("apellido");
}
if (localStorage.getItem("gmail")) {
    campoGmail.value = localStorage.getItem("gmail");
}

formUsuario.onsubmit = function (evento) {
    evento.preventDefault();

    localStorage.setItem("nombre", campoNombre.value.trim());
    localStorage.setItem("apellido", campoApellido.value.trim());
    localStorage.setItem("gmail", campoGmail.value.trim());

    window.location.href = "index.html";
}
