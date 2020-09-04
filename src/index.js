// Node Core Module Setup
// var http = require('http');
// var port = 3001;
// var hostname = 'localhost';
// var server = http.createServer(function(request,response){
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain');
//     response.end('Welcome to Node');
// });

// server.listen(port,hostname, function(){
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

//EXPRESS Framework Setup
// var express = require('express');
import  express from 'express';
import path from 'path';

const app = express();

const port = 3001;
const hostname = 'localhost';

app.get('/',function(request,response){
    response.send('Welcome to Node');
});

app.get('/home',function(request,response){
    const filePath = path.join(__dirname,'views','home.html');
    response.sendFile(filePath);
});

app.listen(port,hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
