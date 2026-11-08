const inputPass = document.querySelector("#password");
const btnVerificar = document.querySelector("#btn-verificar");
const reglaLongitud = document.querySelector("#regla-longitud");
const reglaDigito = document.querySelector("#regla-digito");
const reglaEspacios = document.querySelector("#regla-espacios");
const mensajeFinal = document.querySelector("#mensaje-final");

function verificarPassword() {
    const texto = inputPass.value;
    const cumpleLongitud = texto.length >= 8;

    let tieneDigito = false;
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        if (char >= '0' && char <= '9') {
            tieneDigito = true;
            break;
        }
    }

    let libreEspacios = true;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === ' ') {
            libreEspacios = false;
            break;
        }
    }

    actualizarEstadoRegla(reglaLongitud, cumpleLongitud, "Al menos ocho caracteres");
    actualizarEstadoRegla(reglaDigito, tieneDigito, "Al menos un dígito (0-9)");
    actualizarEstadoRegla(reglaEspacios, libreEspacios, "Libre de espacios");

    if (cumpleLongitud && tieneDigito && libreEspacios) {
        mensajeFinal.textContent = "Cumple todas las reglas";
        mensajeFinal.style.color = "#15803d";
    } else {
        mensajeFinal.textContent = "";
    }
}

function actualizarEstadoRegla(elemento, cumple, textoBase) {
    if (cumple) {
        elemento.textContent = `✓ ${textoBase}`;
        elemento.style.color = "#15803d";
    } else {
        elemento.textContent = `✗ ${textoBase}`;
        elemento.style.color = "#9f1239";
    }
}

btnVerificar.addEventListener("click", verificarPassword);
inputPass.addEventListener("input", verificarPassword);