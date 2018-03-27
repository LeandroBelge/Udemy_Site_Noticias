module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(re,res){
        res.render("admin/form_add_noticia");
    });

    app.post('/noticias/salvar', function(re,res){
        var noticia = re.body;

        //Validações
        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatória').notEmpty().isDate({format: 'YYY-MM-DD'});
        req.assert('noticia', 'Noticia é obrigatória').notEmpty();

        var erros = req.validationErros();

        if(erros){
            res.render('admin/form_add_noticia');
            return;
        }

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);//Instancia a classe noticiasModel
    
        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');//Depois que salva a notícia a tela de lista de notícias é chamada.
        });   
    });

   
}
