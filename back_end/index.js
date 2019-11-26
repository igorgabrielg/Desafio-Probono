// ***** configuração [ inicio ] *****
require('./utils/setConfig');
// ***** configuração [ fim ] *****

const express = require('express');
var { session, sessionStore } = require('./utils/session');
var passport = require('passport');
var bodyParser = require('body-parser');

// configuração de autenticação de passaporte
require('./utils/user_auth');

// ***** importação de rotas [ inicio ] *****
var sessionRouter = require('./routes/session_router');
var APIRouter = require('./routes/api_router');
// ***** importação de rotas [ fim ] *****

// instanciar aplicativo expresso
const app = express();

// ***** body parsing [ Inicio ] *****
app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())


// ***** API [ Inicio ] *****
app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
})
app.use("/api", APIRouter);
// ***** API [ Fim ] *****

// ***** sessão e autenticação [ inicio ] *****
app.use(session({

    secret: 'secret',
    store: sessionStore,
    resave: false,

    saveUninitialized: false,
    cookie: { maxAge: 600000, secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/logout', (req, res, next) => {
    req.logOut();
    res.send("logged out");
})
// configuração de rota
app.use(sessionRouter);
// ***** sessão e autenticação [ fim ] *****

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));