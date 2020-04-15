function compras( trab1, trab2){
    const comprarSorvete = trab1 || trab2
    const comprarTv50 = trab1 && trab2 
    //const comprarTV32 = !!(trab1 ^ trab2)//bitwise
    const comprarTv32 = trab1 != trab2 // ou exclusivo pode ser simulado com a diferença
    const manterSaudavel = !comprarSorvete
    
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}
console.log('Caso 1\n',compras(false, true))

console.log('Caso 2\n',compras(true, true ))

console.log('Caso 3\n',compras(false,false))