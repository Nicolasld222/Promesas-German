const fs = require('fs').promises;
const path = require('path');

const TOTAL_FILES = 5;  // puedes subir este número
const CONCURRENCY_LIMIT = 100;  // cuántas escrituras simultáneas

async function crearArchivo(nombre, contenido) {
  const filePath = path.join(dirname, 'archivos', nombre);
  await fs.writeFile(filePath, contenido);
}

async function generarArchivos() {
  // Asegúrate de que exista el directorio
  await fs.mkdir(path.join(dirname, 'archivos'), { recursive: true });

  const tareas = [];
  for (let i = 0; i < TOTALFILES; i++) {
    const nombre = `archivo${i}.txt;
    const contenido = Este es el contenido del archivo número ${i}`;
    tareas.push(() => crearArchivo(nombre, contenido));
  }

  await ejecutarConLimite(tareas, CONCURRENCY_LIMIT);
  console.log("Todos los archivos han sido generados.");
}

async function ejecutarConLimite(tareas, limite) {
  const ejecuciones = [];
  let indice = 0;

  async function ejecutarSiguiente() {
    if (indice >= tareas.length) return;

    const tarea = tareas[indice++];
    await tarea();
    await ejecutarSiguiente();
  }

  for (let i = 0; i < limite; i++) {
    ejecuciones.push(ejecutarSiguiente());
  }

  await Promise.all(ejecuciones);
}

generarArchivos().catch(console.error);