'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar rutas
var user_routes = require('./routes/user');
var animal_routes = require('./routes/animal');

// middlewares de body parser
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

// configurar cabecera y cors
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// rutas base
app.use('/api', user_routes);
app.use('/api', animal_routes);

/*
app.post('/probando', (req, res) => {
    res.status(200).send({
        mensaje: 'Este es el método probando...'
    })
});
*/
module.exports = app