var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    console.log(req.session)
    console.log(req.user);
    console.log(req.authInfo);
    res.send(req.isAuthenticated());
});

router.get("/valor", function (req, res, next) {
    console.log(req.session);
    res.sendFile(path.join(__dirname, '../views/valor.html'));
});

module.exports = router;