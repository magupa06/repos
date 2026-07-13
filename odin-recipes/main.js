const miTitulo = document.querySelector("h1");
let miImage = document.querySelector("img");
let miBoton = document.querySelector("#login");
let miBotonSignup = document.querySelector("#signup");

function mostrarBienvenida() {
    let nombre = localStorage.getItem("nombre");
    let apellido = localStorage.getItem("apellido");

    if (nombre && apellido) {
        let inicialApellido = apellido.charAt(0).toUpperCase();
        miTitulo.textContent = "Bienvenido, " + nombre + " " + inicialApellido + ".";
    } else {
        miTitulo.textContent = "Odin Recipes";
    }
}

miImage.onclick = function () {
    let miSrc = miImage.getAttribute("src");
    if (miSrc === "../images/kebab.jpg") {
    } else {
        miImage.setAttribute("src", "../images/kebab.jpg")
    }
}

mostrarBienvenida();

miBoton.onclick = function () {
    window.location.href = "usuario.html";
}

miBotonSignup.onclick = function () {
    window.location.href = "registro.html";
}

let lasagnaBox = document.querySelector(".lasagna__box");
if (lasagnaBox) {
    lasagnaBox.onclick = function () {
        window.location.href = "recipes/lasagna.html";
    }
}

let carrilleraBox = document.querySelector(".carrillera__box");
if (carrilleraBox) {
    carrilleraBox.onclick = function () {
        window.location.href = "recipes/carrillera.html";
    }
}

let kebabBox = document.querySelector(".kebab__box");
if (kebabBox) {
    kebabBox.onclick = function () {
        window.location.href = "recipes/kebab.html";
    }
}

let shushiBox = document.querySelector(".shushi__box");
if (shushiBox) {
    shushiBox.onclick = function () {
        window.location.href = "recipes/shushi.html";
    }
}