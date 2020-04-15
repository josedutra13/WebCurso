const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome:'Gustavo',
        nota: 8.1
    },{
        nome:'Ana',
        nota: 9.3
    }]
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebaca',
        nota:8.9
    },{
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotadoAluno = a => a.nota
const getNotadaTurma = turma => turma.alunos.map(getNotadoAluno)

const notas1 = escola.map(getNotadaTurma)

console.log(notas1)
console.log([].concat( [ 8.1, 9.3 ], [ 8.9, 7.3 ] ))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escola.flatMap(getNotadaTurma)
console.log(notas2)