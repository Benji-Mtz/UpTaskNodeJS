const express = require('express');
// Funcion Router expone rutas y comunica al controlador 
const router = express.Router();

// Importar el express validator
const { body } = require('express-validator/check');


// importamos el controlador
const proyectosController = require('../controllers/proyectosController');

module.exports = function () {

    router.get('/', proyectosController.proyectosHome);
    router.get('/nosotros', proyectosController.nosotros);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    router.post('/nuevo-proyecto', 
        body('nombre').not().isEmpty().trim().escape(),
        proyectosController.nuevoProyecto);
    return router;
}