const express = require('express');
const calc = require('./util/calculador');
const app   = express();

const PORT = 8080;



app.get('/somar/:a/:b', function(req, res){
    let x = req.params.a;
    let y = req.params.b;
    let c = calc.somar(x, y);

    res.send(`${x} + ${y} = ${c}`);

})

app.get('/subtrair/:a/:b', function(req, res){
    let x = req.params.a;
    let y = req.params.b;
    let c = calc.subtrair(x, y);

    res.send(`${x} - ${y} = ${c}`);

})

app.get('/multiplicar/:a/:b', function(req, res){
    let x = req.params.a;
    let y = req.params.b;
    let c = calc.multiplicar(x, y);

    res.send(`${x} * ${y} = ${c}`);

})

app.get('/dividir/:a/:b', function(req, res){
    let x = req.params.a;
    let y = req.params.b;
    let c = calc.dividir(x, y);

    res.send(`${x} / ${y} = ${c}`);

})



app.listen(PORT, function(){
    console.log('app rodando na porta ' + PORT);
});
