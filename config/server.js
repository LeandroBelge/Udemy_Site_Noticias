var express = require('express');
var consign = require('consign');//Gerenciador de routes

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app);//Executo o consign, incluo as routes e insiro o consign dentro do express

module.exports = app;