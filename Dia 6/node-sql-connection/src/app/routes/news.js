//defino rutas de noticias
module.exports = function(app){
    app.get('/',(req,res)=> {
        res.send('hello')
    });
}