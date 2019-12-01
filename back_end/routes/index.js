var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
var db = require('../db/db_helper');
var passport = require('passport');
const mysql = require('mysql');

var session = require('express-session');



router.post('/users', function(req, res, next) {
  console.log('-----------------------------------------------------------------------------------------------------------');
  console.log('Valor: '+ req.body.name);
  db.querySQLSync(`UPDATE users SET name="${req.body.name}", cpf="${req.body.cpf}", email="${req.body.email}" WHERE users.id = 23`, true)
        .then(() => {
            console.log('Dado atualizado:' + req.name)
            // res.send('Atualizado!')
            res.send('Dado atualizado:' + req.name)
        })
        .catch((err) => {
          console.log('Dado atualizado:' + req.body.name)
            console.log(err);
            res.send('Erro!:')
        });

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