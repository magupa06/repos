const botonDark = document.querySelector("#dark-toggle");

function aplicarPreferenciaGuardada() {
    const modoGuardado = localStorage.getItem("modoOscuro");
    if(modoGuardado === "activado") {
        document.body.classList.add("dark");
        botonDark.textContent = "Modo claro";
    }
}

botonDark.onlick = function() {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("Dark")) {
        localStorage.setItem("modoOscuro", "activado");
        botonDark.textContent = "Modo claro";
    } else {
        localStorage.setItem("modoOscuro", "desactivcado");
        botonDark.textContent = "Modo oscuro";
    }
}

aplicarPreferenciaGuardada();