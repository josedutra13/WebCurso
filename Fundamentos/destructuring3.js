function rand({min = 0, max = 1000})// rand e uma função randominca
{
     const valor  = Math.random() * (max - min) + min
     return Math.floor(valor)
}

const obj = {max: 50, min :40}
console.log(rand(obj))  
console.log(rand({min: 955}))
console.log(rand({}))
//console.log(rand())