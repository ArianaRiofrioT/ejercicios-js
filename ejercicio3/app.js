const inputNotas = document.querySelector("#input-notas");
const btnAnalizar = document.querySelector("#btn-analizar");
const pResultado = document.querySelector("#resultado");

inputNotas.addEventListener("input", () => {
    pResultado.style.color = "black";
    pResultado.innerHTML = "";

    const texto = inputNotas.value.trim();
    if (texto === "") return;

    const partes = texto.split(",");
    for (let i = 0; i < partes.length; i++) {
        const parteLimpia = partes[i].trim();
        if (parteLimpia === "") continue;
        
        const num = Number(parteLimpia);
        if (!isNaN(num)) {
            if (num < 0 || num > 10) {
                mostrarError(`Error: La calificación ${num} está fuera del intervalo permitido (0 a 10).`);
                return;
            }
        }
    }
});

btnAnalizar.addEventListener("click", () => {
    pResultado.style.color = "black";
    pResultado.innerHTML = "";

    const texto = inputNotas.value.trim();
    if (texto === "") {
        mostrarError("Por favor, ingresa al menos una calificación.");
        return;
    }

    const partes = texto.split(",");
    const calificaciones = [];

    for (let i = 0; i < partes.length; i++) {
        const num = Number(partes[i].trim());
        if (isNaN(num)) {
            mostrarError("Error: Todos los valores deben ser números válidos.");
            return;
        }
        calificaciones.push(num);
    }

    for (let i = 0; i < calificaciones.length; i++) {
        if (calificaciones[i] < 0 || calificaciones[i] > 10) {
            mostrarError(`Error: La calificación ${calificaciones[i]} está fuera del intervalo permitido (0 a 10).`);
            return;
        }
    }

    let suma = 0;
    let aprobadas = 0;
    let noAprobadas = 0;

    let notaAlta = calificaciones[0];
    let notaBaja = calificaciones[0];

    for (let i = 0; i < calificaciones.length; i++) {
        const nota = calificaciones[i];

        suma += nota;

        if (nota >= 7) {
            aprobadas++;
        } else {
            noAprobadas++;
        }

        if (nota > notaAlta) {
            notaAlta = nota;
        }

        if (nota < notaBaja) {
            notaBaja = nota;
        }
    }

    const promedio = suma / calificaciones.length;

    pResultado.innerHTML = `
        <strong>Calificaciones:</strong> ${calificaciones.join(", ")} <br>
        <strong>Promedio:</strong> ${promedio.toFixed(2)} <br>
        <strong>Calificación más alta:</strong> ${notaAlta} <br>
        <strong>Calificación más baja:</strong> ${notaBaja} <br>
        <strong>Notas aprobadas:</strong> ${aprobadas} <br>
        <strong>Notas no aprobadas:</strong> ${noAprobadas}
    `;
});

function mostrarError(mensaje) {
    pResultado.style.color = "#9f1239";
    pResultado.textContent = mensaje;
}