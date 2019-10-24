'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar rutas
var user_routes = require('./routes/user');


// middlewares de body parser
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

// configurar cabecera y cors

// rutas base
app.use('/api', user_routes);

/*
app.post('/probando', (req, res) => {
    res.status(200).send({
        mensaje: 'Este es el método probando...'
    })
});
*/
module.exports = app