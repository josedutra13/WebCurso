const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')// ele faz requisições para receber informações de algo que e remoto

const chineses = f => f.pais === 'China'
const Wom = f => f.genero === 'F'
const menorSalario = (func,funcAtual ) => {
    return func.salario < funcAtual.salario ? func : funcAtual // ? = significa então, : = significa 'Caso contrario'
}



axios.get(url).then(response =>{
    const funcionarios = response.data
    console.log(funcionarios)

    // mulher chinesa com menor salario?
    const func = funcionarios
         .filter(chineses)// filter vai filtrar só um elemento que foi especificado
         .filter(Wom)
         .reduce(menorSalario)// vai retornar uma operação que mostra o acumulador, e o atual
   
   
         console.log(func)

})

