function filter(elements,cb)
{
    ans=[]
    for(let i=0;i<elements.length;i++)
    if(cb(elements[i]))
    ans.push(elements[i])
    return ans
}
module.exports=filter