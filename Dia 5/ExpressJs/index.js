/*
const http = require('http');
http.createServer((req,res) =>{
res.end('hellos world')
}).listen(3000);
*/
//Instancio express
const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('appname', 'Mi primer server');
// console.log(__dirname);
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');






//MIDDLEWARE
//middleware using morgan
app.use(morgan('combined')); //Formato DEV o SHORT o COMBINED



//middleware by myself
/*
app.use(
    function (req, res, next) {
        console.log('req url : ' + req.url);
        next();
    });

app.use((req, res, next) => {
    console.log('Ha pasado por esta funcion');
    next();
});
*/
//enlazo con rutas
app.use(require('./routes'));
/*
o puedo hacerlo mas limpio
const routes = require('./routes');
app.use(routes);
*/
const routesApi = require('./routes-api')
app.use('/api',routesApi);




//Para rutas que no existen, luego de ejecutar toda la busqueda de rutas, ejecuta esta
app.get('*', (req, res) => {
    res.end('Archivo no encontrado');
});
app.listen(3000, () => {
    console.log('Servidor Funcionando');
    console.log('Nombre de la app', app.get('appname'))

});