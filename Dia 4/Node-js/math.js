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



//Objeto para exportar
exports.add= add;
exports.substract= substract;
exports.multiply= multiply;
exports.divide= divide;