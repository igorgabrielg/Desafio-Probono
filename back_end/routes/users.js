var express = require('express');
var router = express.Router();
var app = express();
var db = require('../db/connection');
const mysql = require('mysql');

var session = require('express-session');

app.post(function(req, res, next){
    console.log(req);
  })


router.get('/', function (req, res, next) {
    console.log(req.session)
    console.log(req.user);
    console.log(req.authInfo);
    res.send('O usuario foi autenticado: ' + req.isAuthenticated());
});

function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'user_test'
    });
  
    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
  }


module.exports = router;