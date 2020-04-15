// operdador ... rest(juntar)/ spread (espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = {nome:'Matheus', salario: 12348.98}
const clone = {ativo: true, ...funcionario}
console.log(clone)// ele será chamado de spread quando ele e usado para espalhar o os elementos de um array ou de algum objeto

// usar spread com array
const grupoA = ['Jõao','Pedro', 'Gloria']
const grupoFinal = ['Asd',... grupoA]
console.log(grupoFinal)