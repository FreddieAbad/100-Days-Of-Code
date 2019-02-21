//funciones 
function add(x1, x2) {
    return x1 + x2;
}

function substract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2) {
    if (x2 == 0)
        console.log('Error')
    else
        return x1 / x2;
}

function hola(nombre) {
    console.log('Hola', nombre);
}


//Objeto para exportar
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
//exportar funciones como un objeto
// const Math1={};
// Math1.substract=substract;
// module.exports = Math1;


exports.hola = hola;