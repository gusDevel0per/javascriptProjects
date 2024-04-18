let produtos = [];

function criarProduto(id, nome, qtd){
    let p = {
    id: id,
    nome: nome,
    qtd: qtd
    }
    return p;
}

function adicionarProduto(p) {
    produtos.push(p);
}

function listarProdutos(){
    return produtos;
}

function removerProdutos(id){
    produtos = produtos.filter((p) => {
        return p.id != id;
    });


}

function editarProduto(id, qtd){
    let pRetorno;
    produtos.forEach(p => {
        if(p.id == id){
            p.qtd = qtd;
            pRetorno = p;
        }
    });
    
    return pRetorno;
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProdutos,
    editarProduto
}