document.body.style.backgroundColor = "black";

let isLampOn = false;

function toggleLamp() {
    const lampada = document.getElementById("lampada");
    const button = document.getElementById("Botao");

    if (!lampada || !button) {
        console.error("Elementos não encontrados no DOM.");
        return;
    }

    if (isLampOn) {
        turnOffLamp(lampada, button);
    } else {
        turnOnLamp(lampada, button);
    }

    isLampOn = !isLampOn;
}

function turnOnLamp(lampada, button) {
    lampada.src = "img/so (1)";
    button.textContent = "Desligar";
}

function turnOffLamp(lampada, button) {
    lampada.src = "img/soP (2) (1).png";
    button.textContent = "Ligar";
}

