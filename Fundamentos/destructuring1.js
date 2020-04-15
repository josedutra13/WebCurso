const pessoa = {
    nome : 'Joãozin',
    idade : 4,
    endereco : {
        logradouro: 'Rua ABC',
        numero : 1000
    }
}

const {nome, idade} = pessoa // as {} mostra que e o operador destructing e está pegando atributos especificos do objeto
console.log(nome, idade)

const {nome : n , idade : i} = pessoa // {} extrai de dentro do objeto 
console.log(n, i)

const { sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome , bemHumorado)

const { endereco :{ logradouro, numero, cep = true  }} = pessoa
console.log(logradouro, numero , cep)