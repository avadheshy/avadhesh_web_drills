let reduce= require('../reduce')
const cb=(element1,element2) => element1+element2
result = reduce([1,2,3,4,5,5],cb,10)
console.log(result)