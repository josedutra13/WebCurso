const obj = {a: 1, b:2, c:3, soma(){return a+b+c}}
console.log(JSON.stringify(obj))// JSON e um formado textual, e usado para compartilhamento de dados, e eles não podem ter funções dentro deles

//console.log(JSON.parse("{a: 1, b: 2, c:3}"))
//console.log(JSON.parse("{'a' : 1,'b':2, 'c' :3 "))
console.log(JSON.parse('{"a" : 1, "b": 2, "C": 3}'))
console.log(JSON.parse('{"a" : 1, "b" : "string", "c" : true, "d":{},"e": []}')) // No JSON as strings e os atributos necessitam de conter as aspas duplas
