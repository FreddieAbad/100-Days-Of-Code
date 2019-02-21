const os = require('os');
console.log(os.platform());

console.log(os.release());
console.log('free memory: ' + os.freemem() + ' bytes');
console.log('total memory: ' + os.totalmem() + ' bytes');
//funcion asyncrona
const fs = require('fs');
fs.writeFile('./texto.txt', 'linea uno', function (err) {
    //funcion callback, que se ejecuta al cumplir condiciones
    if (err)
        console.log(err);
    else
        console.log('Todo bien - Archivo Creado')
});
//Node js delega, cumple condiciones mientras se ejecuta tareas externas

console.log('ultima linea de codigo');

//Codgo bloqueante no es asyncrono
// const result = fs.writeFile('','')

// const user = query('SELECT * FROM USUARIO');
// query('SELECT * FROM USUARIO', function (err, users){
//     if(err){
//         console.log(err);
//     }
//     if(users){
//         console.log('ok')
//     }
// })

fs.readFile('./texto.txt', function (err, data) {
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
})