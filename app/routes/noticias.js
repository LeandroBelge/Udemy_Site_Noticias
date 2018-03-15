module.exports = function(app){
    app.get('/noticias', function(re,res){
        res.render("noticias/noticias");
    });
};