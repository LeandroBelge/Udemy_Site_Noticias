var express = require('express');
var consign = require('consign');//Gerenciador de routes
var bodyParser = require('body-parser');//middleware
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));//Trata os métodos de requisição e resposta dos formulários
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);//Executo o consign, incluo as routes e insiro o consign dentro do express

module.exports = app;