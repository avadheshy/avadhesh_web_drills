const find = require('../find')
const cb = (value,element)=>  value==element? true:false
console.log(find([1,2,3,4,5,5],cb,10))