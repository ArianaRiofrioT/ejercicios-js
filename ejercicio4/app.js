const inputTarea = document.querySelector("#input-tarea");
const btnAgregar = document.querySelector("#btn-agregar");
const listaTareas = document.querySelector("#lista-tareas");
const mensajeError = document.querySelector("#mensaje-error");

btnAgregar.addEventListener("click", () => {
    mensajeError.textContent = "";
    const texto = inputTarea.value;

    if (texto.trim() === "") {
        mensajeError.textContent = "Error: No se pueden agregar tareas vacías o con espacios.";
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = texto;
    span.className = "tarea-texto";

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            span.classList.add("completada");
        } else {
            span.classList.remove("completada");
        }
    });

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "btn-eliminar";
    btnEliminar.type = "button";

    btnEliminar.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnEliminar);
    listaTareas.appendChild(li);

    inputTarea.value = "";
    inputTarea.focus();
});

inputTarea.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        btnAgregar.click();
    }
});