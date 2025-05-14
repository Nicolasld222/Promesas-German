//Promise All
const promesa1 = new Promise((resolve)=> setTimeout(resolve,2000,10));
const promesa2 = new Promise((resolve)=> setTimeout(resolve,3000,15));
const promesa3 = new Promise ((resolve)=> setTimeout(resolve,4000,10));

Promise.all([promesa1, promesa2, promesa3])
.then((resultados)=>{
    console.log(resultados);
});
