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
import bodyParser from 'body-parser';
import multer from 'multer';
const upload = multer()

const app = express();

app.set('views', path.join(__dirname, 'views'));

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

app.set('view engine', 'ejs');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const port = 3001;
const hostname = 'localhost';

app.get('/',function(request,response){
    response.render('home');
});

app.get('/about',function(request,response){
    //This is only used for serving static files
    const filePath = path.join(__dirname,'views','about.html');
    response.sendFile(filePath);
});

app.get('/profile',function(nad,david){
    const name = 'David';
    david.render('profile',{
        //normal object es5 key:value
        //name:name
        //With es6
        name
    });
});

app.get('/signup',function(req,res) {
    console.log('GET URL')
    const initialData = {
        email: 'email@email.com',
        password: 'testest',
        address: 'Address 1',
        address2: 'Address 2',
        city: 'Toronto',
        zip: 'ABC'
    }
    res.render('signup',initialData);
});

app.post('/signup', upload.array(), function(req,res) {
    console.log('POST URL')
    console.log('DATA',req.body);
    
    // here we will add validations
    // According to the validation we can either show the form
    // or take it to another page.
    // if(req.body.email) {
    //     res.redirect('/profile');
    // }
    // res.json({message:'User Added'})
    res.render('signup',req.body);
});

app.listen(port,hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
