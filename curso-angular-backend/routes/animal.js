'use strict'

var express = require('express');
var Animalcontroller = require('../controllers/animal');

var api = express.Router();
var md_auth = require('../middleware/authenticated');
var md_admin = require('../middleware/is_admin');

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/animals'});

api.get('/prueba-animales', md_auth.ensureAuth, Animalcontroller.pruebas);
api.post('/animal', [md_auth.ensureAuth, md_admin.isAdmin], Animalcontroller.saveAnimal);
api.get('/animals', Animalcontroller.getAnimals);
api.get('/animal/:id', Animalcontroller.getAnimal);
api.put('/update-animal/:id', [md_auth.ensureAuth, md_admin.isAdmin], Animalcontroller.updateAnimal);
api.post('/upload-image-animal/:id', [md_auth.ensureAuth, md_admin.isAdmin, md_upload], Animalcontroller.uploadImage);
api.get('/get-image-animal/:imageFile', Animalcontroller.getImageFile);
api.delete('/animal/:id', [md_auth.ensureAuth, md_admin.isAdmin], Animalcontroller.deleteAnimal);

module.exports = api;