const Proyectos = require('../models/Proyectos');


exports.proyectosHome = async (req, res) => {

    const proyectos = await Proyectos.findAll();
    //el index es de index.pug
    res.render('index',{
        nombrePagina: 'Proyectos',
        proyectos
    });
}

exports.nosotros = (req, res) => {
    res.render('nosotros',{
        nombrePagina: 'Nosotros'
    });
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    });
}

exports.nuevoProyecto = async (req, res) => {
    // Enviar a la consola lo que el usuario escriba
    // console.log(req.body); {nombre: 'un texto en input'}

    //destructuracion para validar un texto en input
    
    //const nombre = req.body.nombre;
    const { nombre } = req.body;

    let errores = [];

    if (!nombre) {
        errores.push({'texto': 'Agrega un nombre al proyecto'});
    }

    //Si hay errores
    if (errores.length > 0){
        res.render('nuevoProyecto',{
            nombrePagina: 'Nuevo Proyecto',
            // Pasamos el error tipo props
            errores
        });
    } else {
        // No hay errores
        // Insertar en la BD.
        //const url = slug(nombre).toLowerCase();
        const proyecto = await Proyectos.create({ nombre });
        res.redirect('/');
        
    }
    
}