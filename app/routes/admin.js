module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(re,res){
        res.render("admin/form_add_noticia");
    });

    app.post('/noticias/salvar', function(re,res){
        var noticia = re.body;
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);//Instancia a classe noticiasModel
    
        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');//Depois que salva a notícia a tela de lista de notícias é chamada.
        });   
    });

   
}
