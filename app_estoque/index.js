const express = require('express');
const estoque = require('./src/estoque')
const app   = express();

const PORT = 8080;

app.get('/adicionar/:id/:nome/:qtd', function (req, res) {
    let id = req.params.id;
    let name = req.params.nome;
    let qtd = req.params.qtd;
    let p   = estoque.criarProduto(id, name, qtd);
    estoque.adicionarProduto(p);
    res.send(p);

})

app.get('/listar', function (req, res){
    res.send(estoque.listarProdutos());
})

app.get('/remover/:id', function (req, res) {
    let id  = req.params.id; 
    estoque.removerProdutos(id);
    res.send(id);
})

app.listen(PORT, function(){
console.log('app rodando na porta ' + PORT);

})

