function esperar() {
    return new Promise((resolve, reject) => {
      function terminar() {
        resolve("Proceso terminado");
      }
      setTimeout(terminar, 3000);
    });
  }
  
  async function ejecutarProceso() {
    console.log("Iniciando proceso...");
    const mensaje = await esperar();
    console.log(mensaje);
  }
  
  ejecutarProceso();
  