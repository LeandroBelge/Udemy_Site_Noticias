module.exports = function(application){
    
    application.get('/noticias', function(re,res){
        
        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);//Instancia a classe noticiasModel

        noticiasModel.getNoticias(function(error, result){
            res.render("noticias/noticias", {noticias : result});
        });            
    });
};