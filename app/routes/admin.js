module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(re,res){
        res.render("admin/form_add_noticia");
    });

    app.post('/noticias/salvar', function(re,res){
        var noticias = re.body;
        res.send(noticias);
    });
}
