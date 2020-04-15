const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[2])
console.log(valores[1])

valores[1]= 12
console.log(valores[1])
console.log(valores.length)// mostra qtd de elementos no array

valores.push('bla',2,33)
console.log(valores)

console.log(valores.pop())// retira o ultimo elemento do array
delete valores[0] // deleta oque está dentro do array
console.log(valores)

console.log(typeof valores)