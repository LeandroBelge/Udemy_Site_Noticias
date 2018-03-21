module.exports = function(application){
    
    application.get('/noticias', function(re,res){
        
        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function(error, result){
            res.render("noticias/noticias", {noticias : result});
        });            
    });
};