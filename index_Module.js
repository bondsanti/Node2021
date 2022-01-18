//เรียกใช้งานแบบที่ 1
const myMod = require('./modules/MyModules')
//เรียกใช้งานแบบที่ 2
const dateNow = require('./modules/MyModules').getCurrentTime

const number=1000000


console.log(dateNow()) 
console.log(myMod.add(50,100))


console.log(myMod.formatNumber(number));