const miTitulo = document.querySelector("h1");
let miImage = document.querySelector("img");
let miBoton = document.querySelector("button");

miTitulo.textContent = "Odin Recipes"

miImage.onclick = function () {
    let miSrc = miImage.getAttribute("src");
    if (miSrc === "../images/kebab.jpg") {
    } else {
        miImage.setAttribute("src", "../images/kebab.jpg")
    }
} 

function estableceNombreUsuario() {
    let miNombre = prompt("Introduzca su nombre: ");
    if(!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem("nombre", miNombre);
        miTitulo.innerHTML = "Bienvenido, " + miNombre;
    }
}

if(!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Bienvenido," + nombreAlmacenado;
}

miBoton.onclick = function () {
    estableceNombreUsuario();
}