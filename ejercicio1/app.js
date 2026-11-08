const btnCalcular = document.querySelector("#btn-calcular");
const inputPrecio = document.querySelector("#precio");
const inputCantidad = document.querySelector("#cantidad");
const pResultado = document.querySelector("#resultado");

btnCalcular.addEventListener("click", () => {
    pResultado.style.color = "black";
    pResultado.innerHTML = "";

    const valorPrecio = inputPrecio.value.trim();
    const valorCantidad = inputCantidad.value.trim();

    if (valorPrecio === "" || valorCantidad === "") {
        mostrarError("Error: Existen campos vacíos.");
        return;
    }

    const precio = parseFloat(valorPrecio);
    const cantidad = Number(valorCantidad);

    if (isNaN(precio) || precio <= 0) {
        mostrarError("Error: El precio debe ser mayor que cero.");
        return;
    }

    if (isNaN(cantidad) || !Number.isInteger(cantidad) || cantidad <= 0) {
        mostrarError("Error: La cantidad debe ser un número entero positivo.");
        return;
    }

    const subtotal = precio * cantidad;
    let descuento = 0;
    let total = subtotal;

    if (subtotal >= 100) {
        descuento = subtotal * 0.10;
        total = subtotal - descuento;
    }

    if (descuento > 0) {
        pResultado.innerHTML = `
            Subtotal: $${subtotal.toFixed(2)} <br>
            Descuento (10%): -$${descuento.toFixed(2)} <br>
            <strong>Total: $${total.toFixed(2)}</strong>
        `;
    } else {
        pResultado.textContent = `Total: $${total.toFixed(2)}`;
    }
});

function mostrarError(mensaje) {
    pResultado.style.color = "#9f1239";
    pResultado.textContent = mensaje;
}