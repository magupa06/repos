const botonDark = document.querySelector("#dark-toggle");

function aplicarPreferenciaGuardada() {
    const modoGuardado = localStorage.getItem("modoOscuro");
    if(modoGuardado === "activado") {
        document.body.classList.add("dark");
        botonDark.textContent = "Modo claro";
    }
}

botonDark.onclick = function() {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("modoOscuro", "activado");
        botonDark.textContent = "Modo claro";
    } else {
        localStorage.setItem("modoOscuro", "desactivado");
        botonDark.textContent = "Modo oscuro";
    }
}

aplicarPreferenciaGuardada();