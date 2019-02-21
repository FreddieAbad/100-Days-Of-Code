const http=require('http');
const colors=require('colors');

/*
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'})
    res.write('<h1>Hola Mundo</h1>')
    res.end()
}).listen(3000);
*/

//Lo mismo de arriba pero mejor
/*
const handleServer = function(req,res){
    res.writeHead(200,{'Content-type':'text/html'})
    res.write('<h1>Hola Mundo</h1>')
    res.end()
};
const server=http.createServer(handleServer)
server.listen(3000,function(){
    console.log('Server on port 3000'.green);
});
*/




//Lo de arriba pero mucho mejor, al usar express es mejor
const express=require('express');
const server = express();

server.get('/',(req,res)=>{
    res.send('<h1>SERVER CON EXPRESS</h1>');
    res.end();
})
server.listen(3000,()=>{
    console.log('Server on port 3500'.red)
});