const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/1 * 21 * * 4',()=>{
    console.log('Tarefa1', new Date().getSeconds())
})

//setImmediate
//setInterval

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelamento')   
},2000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek= [ new schedule.Range(1,5)]
regra.hour = 21
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra,function(){
    console.log('TAREFA 2!',new Date().getSeconds())
})

