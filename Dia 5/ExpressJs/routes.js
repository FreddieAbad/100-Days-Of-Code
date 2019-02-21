const express = require('express');
const router = express.Router();


//ROUTING
//creo servidor
router.get('/', function (req, res) {
    //req recibe server - res responde server
    res.render('index.ejs')


    //res.end('Hello World');
});

router.get('/login', (req, res) => {
    res.render('login');
    // res.end('Aqui va el login');
});


module.exports = router;
