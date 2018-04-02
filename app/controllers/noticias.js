module.exports.noticias = function(application, req, res){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);//Instancia a classe noticiasModel

    noticiasModel.getNoticias(function(error, result){
        res.render("noticias/noticias", {noticias : result});
    });           
}

module.exports.noticia = function(application, req, res){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticia(function(error, result){
        res.render("noticias/noticia", {noticia : result});
    });
}