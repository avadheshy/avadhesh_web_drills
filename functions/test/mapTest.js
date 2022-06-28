let map = require('../map')
//const cb = (ele) => ele ** 2
const cb=(element) => element*5
result = map([1,2,3,4,5,5],cb)
console.log(result)