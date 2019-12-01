var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
var db = require('../db/db_helper');
var passport = require('passport');
const mysql = require('mysql');

var session = require('express-session');



router.post('/users', function(req, res, next) {
  if (!req.isAuthenticated()){
    console.log('O usuario não é autenticado!');
    res.send('O usuario não é autenticado!')
  }
  else
    db.querySQLSync(`UPDATE users SET name="${req.body.name}", cpf="${req.body.cpf}", email="${req.body.email}" WHERE users.id = "${req.user[0].id}"`, true)
          .then(() => {
              console.log('Os dados de: ' +  req.body.id + 'foram atualizado.')
              // res.send('Atualizado!')
              res.send('Dado atualizado:' +  req.body.name)
          })
          .catch((err) => {
            console.log('Erro ao atualizar os dados do usuario: ' + req.body.id)
              console.log(err);
              res.send('Erro ao atualizar os dados do usuario: ' + req.body.name)
          });

})

router.post('/verificar', function(req, res, next) {
  res.render('/users', {
    nome: req.body.name,
    cpf: req.body.cpf,
    email: req.body.email
  })

})


router.get("/", function (req, res, next) {
  console.log(req.session);
  res.sendFile(path.join(__dirname, '../../front_end/index.html'));
});

router.post('/',
    function (req, res, next) {
    // passport.authenticate('local', {
    //     successRedirect: '/users',
    //     failureRedirect: '/'
    // })
    passport.authenticate('local', {},function(err, user, info, status) {
        // console.log(err);
        // console.log(user);
        // console.log(info);
        // console.log(status);
        // if (err) {
        // }
        if (err) { return next(err); }
        if (!user) { return res.redirect('/'); }
        req.logIn(user, async function(err) {
          if (err) { return next(err); }
        //   console.log("before delay")
        //   await delay(2000);
        //   console.log("after delay")
          res.login = user
          return res.login, res.redirect('/users');
        });
        // return res.redirect('/users');

    })(req, res, next);
    }
);

var delay = function(dTime){
    return new Promise(r => setTimeout(r, dTime));
}
module.exports = router;