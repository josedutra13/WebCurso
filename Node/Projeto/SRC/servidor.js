const porta = 3003 //a porta e a forma que vc tem para selecionar qual processo vc vai usar para a requisição

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancodedados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos',(req, res,next) => {
    res.send(bancoDeDados.getProdutos())// Converter para JSON automaticamente
})//get e uma forma de requisição, o use servira para todos os tipos de urls

app.get('/produtos/:id',(req,res,next) => {
    res.send(bancoDeDados.getProduto(req.params.id))// os parametros sempre virão do requeste, e quase sempre recebera uma resposta
})

app.post('/produtos',(req,res,next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // vai gerar um JSON
})

app.put('/produtos/:id',(req,res,next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // vai gerar um JSON
})// o put pode alterar um registro já existente

app.delete('/produtos/:id',(req,res,next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // vai gerar um JSON
})

app.listen(porta,()=> {
    console.log(`Servidor esta executando na porta ${porta}.`)
})

