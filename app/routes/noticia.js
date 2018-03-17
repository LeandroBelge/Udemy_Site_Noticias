module.exports = function(app){
    
    app.get('/noticia', function(re,res){
        
        var connection = app.config.dbConnection();

        var sql = 'select * from noticias where id_noticias = 2';
        connection.query(sql, function(error, result){
            res.render("noticias/noticia", {noticia : result});
        });
    
    });
};