const parametros =  new URLSearchParams(window.location.search);
const idBuscado = parametros.get("id");
const receta = recetas.find( r => r.id === idBuscado);

if (receta) {
    document.getElementById("page-title").textContent = receta.titulo;
    document.getElementById("recipe-title").textContent = receta.titulo;

    const img = document.getElementById("recipe-image");
    img.src = receta.imagen;
    img.alt = receta.titulo;

    const contenedorIngredientes = document.getElementById("recipe-ingredients");
    receta.ingredientes.forEach(ingrediente => {
        const p = document.createElement("p");
        p.textContent = ingrediente;
        contenedorIngredientes.appendChild(p);
    });

    const listaPasos = document.getElementById("recipe-steps");
    receta.pasos.forEach(paso => {
        const li = document.createElement("li");
        li.textContent = paso;
        listaPasos.appendChild(li);
    });
    const lista = document.getElementById("recipe-index-list");
    recetas
        .filter(r => r.id !== idBuscado)
        .forEach(r => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.className = "recipe__index-link";
            a.href = `receta.html?id=${r.id}`;
            a.textContent = r.titulo;
            li.appendChild(a);
            lista.appendChild(li);
        });
} else {
    document.getElementById("recipe-title").textContent = "Receta no encontrada";
}