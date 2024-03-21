let pessoa1 = {   
    nome: "Joao",
    cpf: 123,
    endereco:{
        nomeRua: 'Nome da rua',
        cep: 1333
    }
}
let pessoa2 =  {
    nome: 'Silva',
    cpf: 321
}
console.log(`Cadastro: ${pessoa1.nome} - ${pessoa1.cpf} - ${pessoa1.endereco.nomeRua} ${pessoa1.endereco.cep}`);
console.log(`Cadastro: ${pessoa2.nome} - ${pessoa2.cpf}`);

for(let key in pessoa1){
    console.log(key + ' - ' + pessoa1[key]);
}

const arr = [11, 3, 7, 99, 15];

for (let i = 0; i < arr.length; i++){
    console.log(i + ' - ' + arr[i]);
}

//1 2
//3 4

let A = [[1, 2], [3, 4]]
A[0][1]