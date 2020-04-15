const [a]  = [10] // o operador destructing vem sempre como [] para array e {} para o objeto, não confundir com a declaração de uma variavel 
console.log(a)

const [n1, ,n3,n5,n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6)

const [, [,nota]] = [[, 8,8], [9,6,8]]
console.log(nota)


