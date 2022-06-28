function find(elements,cb,findval){
    for(let i=0;i<elements.length;i++)
    if(cb(elements[i],findval)==true)
    return true
    return undefined
}
module.exports = find