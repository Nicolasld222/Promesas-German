//Promesa simple

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa cumplida en 2 segundos'), 2000);
});

miPromesa
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });