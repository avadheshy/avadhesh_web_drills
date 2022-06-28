const filter = require('../filter')
const cb =(a)=> a%2?true:false
result = filter([1,2,3,4,5,6],cb)
console.log(result)