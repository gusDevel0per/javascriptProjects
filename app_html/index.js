const express = require('express');
const mustacheExpress = require('mustache-express'); 
const app     = express();

app.engine('html', mustacheExpress());
app.set('view engine','html');
app.set('views', __dirname+'/views');


app.get('/', function(req,res){
    let nome = 'João';
    let data = new Date(); 
    res.render('index.html', {nome, data});

});

const PORT = 8080;
app.listen(PORT,function(){
    console.log('app rodando na porta 8080')
})