const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

// 5.Crear la conexion a la BD se carga en cualquier momento
const db = require('./config/db');

// 6. importamos el modelo
require('./models/Proyectos');

// 7. Crea la tabla en la bd en caso que no exista
db.sync()
    .then( () => console.log('Conectado al servidor'))
    .catch( (error) => console.log(error));


//1. Crear aplicacion de express
const app = express();

// Donde cargar los archivos estaticos de imagenes y estilos
app.use(express.static('public'));

// 2. Habilitar Pug
app.set('view engine','pug');

// 3. Añadir la carpeta de las vistas-> views
app.set('views', path.join(__dirname, './views'));

// 4. habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({extended: true}));
// Ruta para el home, middleware (funciones)
// .use puede usar get, post etc es generico
app.use('/', routes() );

// npm install --save-dev nodemon o npm install -D nodemon
app.listen(3000);