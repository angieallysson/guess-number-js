// === ADIVINA EL NÚMERO - Versión DOM ===

// =====================================
// ELEMENTOS DEL HTML
// =====================================

const inputIntento = document.getElementById('inputIntento');
const btnAdivinar = document.getElementById('btnAdivinar');
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');
const historial = document.getElementById('historial');
const btnReiniciar = document.getElementById('btnReiniciar');
const tarjeta = document.getElementById('game-card');

// =====================================
// VARIABLES DEL JUEGO
// =====================================

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let historialIntentos = [];

const MAX_INTENTOS = 10;

// =====================================
// SONIDOS
// =====================================

const sonidoWin = new Audio('win.mp3');

// =====================================
// DEBUG
// =====================================

console.log('Elementos conectados:', {
    inputIntento,
    btnAdivinar,
    mensaje,
    contador,
    historial,
    btnReiniciar,
    tarjeta
});

console.log('(DEBUG) Número secreto:', numeroSecreto);

// =====================================
// FUNCIONES
// =====================================

// Mostrar mensajes
function mostrarMensaje(texto, color) {
    mensaje.textContent = texto;
    mensaje.style.color = color;
}

// Obtener pista según cercanía
function obtenerPista(intento, secreto) {

    let diferencia = Math.abs(intento - secreto);

    if (diferencia <= 5) {
        return '🔥 ¡Muy cerca!';
    } else if (diferencia <= 15) {
        return '♨️ Caliente';
    } else if (diferencia <= 30) {
        return '🌤️ Tibio';
    } else {
        return '❄️ Frío';
    }
}

// =====================================
// FUNCIÓN PRINCIPAL
// =====================================

function verificarIntento() {

    let valor = Number(inputIntento.value);

    // -----------------------------
    // Validar entrada
    // -----------------------------

    if (isNaN(valor) || valor < 1 || valor > 100) {

        mostrarMensaje(
            '⚠️ Ingresa un número del 1 al 100',
            'orange'
        );

        return;
    }

    // -----------------------------
    // Evitar números repetidos
    // -----------------------------

    if (historialIntentos.includes(valor)) {

        mostrarMensaje(
            '⚠️ Ya intentaste ese número',
            'yellow'
        );

        return;
    }

    // -----------------------------
    // Contar intentos
    // -----------------------------

    intentos++;

    let restantes = MAX_INTENTOS - intentos;

    contador.textContent =
        `Intentos: ${intentos} | Restantes: ${restantes}`;

    // -----------------------------
    // Guardar historial
    // -----------------------------

    historialIntentos.push(valor);

    historial.textContent =
        'Historial: ' + historialIntentos.join(', ');

    // -----------------------------
    // Comparar con número secreto
    // -----------------------------

    if (valor === numeroSecreto) {

        mostrarMensaje(
            '🎉 ¡Correcto! Era el ' + numeroSecreto,
            '#00ff88'
        );

        // Sonido de victoria
        sonidoWin.play();

        // Desactivar controles
        btnAdivinar.disabled = true;
        inputIntento.disabled = true;

        // Mostrar botón reiniciar
        btnReiniciar.style.display = 'inline-block';

        // Efecto visual
        tarjeta.style.borderColor = '#00ff88';
        tarjeta.style.boxShadow =
            '0 0 40px rgba(0, 255, 136, 0.5)';

    } else {

        // Pista de cercanía
        let pista = obtenerPista(valor, numeroSecreto);

        // Animación de error
        tarjeta.classList.add('shake');

        setTimeout(() => {
            tarjeta.classList.remove('shake');
        }, 300);

        // Mensajes
        if (valor > numeroSecreto) {

            mostrarMensaje(
                '📈 Muy alto. ' + pista,
                '#ff6b6b'
            );

        } else {

            mostrarMensaje(
                '📉 Muy bajo. ' + pista,
                '#4ecdc4'
            );
        }
    }

    // -----------------------------
    // Verificar derrota
    // -----------------------------

    if (
        intentos >= MAX_INTENTOS &&
        valor !== numeroSecreto
    ) {

        mostrarMensaje(
            '💀 Perdiste. El número era ' + numeroSecreto,
            'red'
        );

        btnAdivinar.disabled = true;
        inputIntento.disabled = true;

        btnReiniciar.style.display = 'inline-block';
    }

    // -----------------------------
    // Limpiar input
    // -----------------------------

    inputIntento.value = '';
    inputIntento.focus();
}

// =====================================
// REINICIAR JUEGO
// =====================================

function reiniciarJuego() {

    // Nuevo número secreto
    numeroSecreto =
        Math.floor(Math.random() * 100) + 1;

    // Reset variables
    intentos = 0;
    historialIntentos = [];

    // Reset textos
    contador.textContent =
        `Intentos: 0 | Restantes: ${MAX_INTENTOS}`;

    historial.textContent = 'Historial: ';

    mostrarMensaje(
        '🎯 ¡Nuevo juego! Adivina el número...',
        '#e94560'
    );

    // Activar controles
    btnAdivinar.disabled = false;
    inputIntento.disabled = false;

    // Ocultar reiniciar
    btnReiniciar.style.display = 'none';

    // Limpiar input
    inputIntento.value = '';
    inputIntento.focus();

    // Reset visual
    tarjeta.style.borderColor =
        'rgba(233, 69, 96, 0.3)';

    tarjeta.style.boxShadow =
        '0 8px 32px rgba(0, 0, 0, 0.4)';

    console.log(
        '(DEBUG) Nuevo número secreto:',
        numeroSecreto
    );
}

// =====================================
// EVENTOS
// =====================================

// Click botón
btnAdivinar.addEventListener(
    'click',
    function(evento) {

        evento.preventDefault();

        verificarIntento();
    }
);

// Enter en input
inputIntento.addEventListener(
    'keydown',
    function(evento) {

        if (evento.key === 'Enter') {

            evento.preventDefault();

            verificarIntento();
        }
    }
);

// Reiniciar
btnReiniciar.addEventListener(
    'click',
    reiniciarJuego
);

// =====================================
// MENSAJE INICIAL
// =====================================

mostrarMensaje(
    '🎯 ¡Empecemos!',
    '#e94560'
);

contador.textContent =
    `Intentos: 0 | Restantes: ${MAX_INTENTOS}`;