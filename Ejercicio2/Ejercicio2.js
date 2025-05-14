//Manejo de Errores
const miPromesa = new Promise((resolve,reject)=>{
    const numero = 0.9;

    if(numero >= 0.5){
        resolve("Su numero es mayor que 0.5 Correcto");
    }else{
        reject("Hubo un error su numero es menor a 0.5");
    }
});

miPromesa
    .then((mensaje)=>{
        console.log(mensaje);
    })
    .catch((error)=>{
        console.error(error)
    });