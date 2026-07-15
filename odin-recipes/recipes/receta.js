const parametros =  new URLSearchParams(window.location.search);
const idBuscado = parametros.get("id");
const receta = recetas.find( r => r.id === idBuscado);

if (receta) {
    document.getElementById("page-title").textContent = receta.titulo;
    document.getElementById("recipe-title").textContent = receta.titulo;

    const img = document.getElementById("recipe-image");
    img.src = receta.imagen;
    img.alt = receta.titulo;

    // Ingredientes: uno <p> por cada ingrediente
    const contenedorIngredientes = document.getElementById("recipe-ingredients");
    receta.ingredientes.forEach(ingrediente => {
        const p = document.createElement("p");
        p.textContent = ingrediente;
        contenedorIngredientes.appendChild(p);
    });

    // Pasos: uno <li> por cada paso
    const listaPasos = document.getElementById("recipe-steps");
    receta.pasos.forEach(paso => {
        const li = document.createElement("li");
        li.textContent = paso;
        listaPasos.appendChild(li);
    });
} else {
    document.getElementById("recipe-title").textContent = "Receta no encontrada";
}