let each= require('../eachFun')
const cb = (ele) => ele ** 2 
result = each([1,2,3,4,5,5],cb)
console.log(result)