function calcular(v1, v2, op){
    let resultado;
    switch (op){
        case '+':
            resultado = v1 + v2;
            break;
        case '-':
            resultado = v1 - v2;
            break;
        case '*':
            resultado = v1 * v2;
            break;
        case '/':
            resultado = v1 / v2;
            break;
    }
    return resultado;
}

function nomeOperador(op){
    let resultado;
    switch (op){
        case '+':
            resultado = "Adição"
            break;
        case '-':
            resultado = "Subtração";
            break;
        case '*':
            resultado = "Multiplicação";
            break;
        case '/':
            resultado = "Divisão";
            break;
    }
    return resultado;
}

module.exports ={
    calcular,
    nomeOperador
}