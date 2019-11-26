// Configura as rotas index, register e users
var router = require('express').Router();

// ***** rotas requerem [início] *****
var user = require('./users');
var register = require('./register');
var index = require('./index');
var valor = require('./valor');
// ***** rotas requerem [ fim ] *****

// ***** rotas [ inicio ] *****
router.use('/', index);
router.use('/register', register);
router.use('/users', user);
router.use('/valor', valor);
// ***** rotas [ fim ] *****

module.exports = router;