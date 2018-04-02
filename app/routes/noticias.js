module.exports = function(application){
    
    application.get('/noticias', function(re,res){
        application.app.controllers.noticias.noticias(application, re, res); 
    });

        
    application.get('/noticia', function(re,res){
        application.app.controllers.noticias.noticia(application, re, res);
    });
};