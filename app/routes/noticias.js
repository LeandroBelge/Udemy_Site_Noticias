var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
    var connection = dbConnection();

    app.get('/noticias', function(re,res){
        var sql = 'select * from noticias';
        connection.query(sql, function(error, result){
            res.render("noticias/noticias", {noticias : result});
        });
    
    });
};