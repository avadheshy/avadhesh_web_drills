var express = require('express');
const fs = require('fs')
var app = express(); // here I use the express() method, instead of the createServer()

app.get('/', function(req, res){
  res.send('Hello World');
  res.end()
});
app.get('/html',function(req,res){
    const data=fs.readFileSync('/home/dell/Desktop/web_drills/server/data/hello.js')
    res.send(data.toString())
    res.end()
})
app.get('/json',function(res,res){
    const data=fs.readFileSync('/home/dell/Desktop/web_drills/server/data/index.json')
    res.send(data.toString())
    res.end()
})
app.get('/uuid',function(res,res){
    const uuid = require('uuid');
    res.write(`{uuid: ${uuid.v1()}}`)
    res.end();
})
app.get('/status',function(res,res){
    res.status(406).send('Not Acceptable');
})
app.get('/delay',function(req,res){
    setTimeout(function() {
        res.status(200).send('ok');   
    }, 3000);
})


var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});