const crearLimitadorIntentos = (maxIntentos) => {
    let intentos = maxIntentos;

    return () => {
        if (intentos <= 0) {
            console.log("Acceso bloqueado: sin intentos");
            return;
        } else {
            intentos--;
            console.log(`Te quedan ${intentos} intentos`);
        }
    };
};

// Ejemplo de uso:
const intentarLogin = crearLimitadorIntentos(3);

intentarLogin(); // Te quedan 2 intentos
intentarLogin(); // Te quedan 1 intentos
intentarLogin(); // Te quedan 0 intentos
intentarLogin(); // Acceso bloqueado: sin intentos
intentarLogin(); // Acceso bloqueado: sin intentos