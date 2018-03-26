module.exports = function(application){
    
    application.get('/noticia', function(re,res){
        
        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia(function(error, result){
            res.render("noticias/noticia", {noticia : result});
        });
    
    });
};