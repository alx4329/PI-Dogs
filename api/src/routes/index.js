const router = require('express').Router();
// const { Raza , Temperamento } = require('../models');
// Importar todos los routers;
const dogs = require('./dogs');
const temperamento = require('./temperament')
//const {dogs, temperamento} = require('../routes')
// Ejemplo: const authRouter = require('./auth.js');





// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(dogs); 
router.use(temperamento);

module.exports = router;
