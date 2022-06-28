const map = require('../mapObject')
const cb =(a)=> a+5
obj={
    'ab':1,
    'bc':2,
    'cd':3,
}
result=map(obj,cb)
console.log(result)