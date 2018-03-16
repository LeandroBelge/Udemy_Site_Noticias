module.exports = function(app){
    
    app.get('/noticias', function(re,res){
        
        var connection = app.config.dbConnection();

        var sql = 'select * from noticias';
        connection.query(sql, function(error, result){
            res.render("noticias/noticias", {noticias : result});
        });
    
    });
};