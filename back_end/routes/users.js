var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
var db = require('../db/db_helper');
const mysql = require('mysql');
const methodOverride = require('method-override');
var session = require('express-session');

app.use(methodOverride('_method'));

app.post('/users', (req, res, next) => {
  console.log('-------------------------------------------------------------------------------------------------');
  db.querySQLSync(`UPDATE users SET name="${req.id.name}", cpf="${req.id.cpf}", email="${req.email}" WHERE users.id = 28`, true)
        .then(() => {
            console.log('Dado atualizado:' + req.name)
            // res.send('Atualizado!')
            res.send('Dado atualizado:' + req.name)
        })
        .catch((err) => {
          console.log('Dado atualizado:' + req.name)
            console.log(err);
            res.send('Erro!:')
        });
})

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