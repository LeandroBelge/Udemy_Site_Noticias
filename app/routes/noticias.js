module.exports = function(app){
    app.get('/noticias', function(re,res){
        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'admin',
            database : 'portal_noticias'
        });
        var sql = 'select * from noticias';
        connection.query(sql, function(error, result){
            res.send(result);
        });
    
    });
};