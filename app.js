//Essa classe ou módulo recupera o módulo server com as configurações 
//do express e do consign. O express é uma interface entre o node e a web
//e o consign é um gerenciador de rotas que consegue identificar e recuperar funções ou 
//objetos de result de módulos. 
//O EJS é o motor que interpreta html e javascript e facilita o trabalho do dev.
var app = require('./config/server');

app.listen(3000, function(){
    console.log("Servidor rodando");
})