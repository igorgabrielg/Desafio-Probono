var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var db = require('../db/db_helper');
var pass_hash = require('../utils/pass_hash');

router.get('/', function (req, res, next) {
    res.sendFile(path.resolve(__dirname, '../../front_end/register.html'));
});

router.post('/', function (request, response, next) {
    console.log(request.body);
    // criando hash da senha (hash e salt da senha)
    let passwordObj = pass_hash.saltHashPassword(request.body.password);

    db.querySQLSync(`INSERT INTO users (name, cpf, email, username, password, salt) VALUES ("${request.body.name}", "${request.body.cpf}", "${request.body.email}", "${request.body.username}", "${passwordObj.passwordHash}", "${passwordObj.salt}")`, true)
        .then(() => {
            return response.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;