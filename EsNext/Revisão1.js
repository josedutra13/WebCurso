// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}// o let contém o escopo de bloco
console.log(a)

// Template String 
const produto = 'Ipad'
console.log(`${produto} e caro `)// e possivel quebrar em varias linhas no template string

// Destructuring
const [l,e, ...tras] = "Cod3r" // ... esse e o operador resting
console.log(l,e,tras)

const [x, ,y] = [1,2,3]
console.log(x,y)

const {idade, nome } = { nome : 'Ana', idade: 9}
console.log(idade,nome)

