var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
var db = require('../db/db_helper');
const mysql = require('mysql');
const methodOverride = require('method-override');
var session = require('express-session');

app.use(methodOverride('_method'));


// JSON.stringify(req.user)
router.get('/', function (req, res, next) {

    if (!req.isAuthenticated()){
      console.log('O usuario não é autenticado!');
      res.send('O usuario não é autenticado!')
    }
    else

      // res.send('Exibindo perfil: '+ req.user[0].id);
      console.log('Usuario autenticado: ' + JSON.stringify(req.user));
      return res.sendFile(path.resolve(__dirname, '../../front_end/users.html'));
});






module.exports = router;