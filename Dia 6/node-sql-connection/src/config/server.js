const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
//settings
//configraucion de puerto
app.set('port', process.env.PORT || 3000);
//configuracion de motor de plantillas
app.set('view engine', 'ejs');
//configuracion de vistas
app.set('views', path.join(__dirname, '../app/views'))




//middleware
app.use(bodyParser.urlencoded({
    extended: false
}))

module.exports = app;