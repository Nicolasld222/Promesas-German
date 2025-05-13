//Función Asíncrona Simple
function simularTime() {
    return new Promise((resolve, reject) => {
        function pendiente() {
            resolve(500); 
        }
        setTimeout(pendiente, 4000); 
    });
}

async function SimulacionAsincrona() {
    console.log("Iniciando Mundo...");
    const valor = await simularTime(); 
    console.log("Hola mundo..."); 
}
SimulacionAsincrona();