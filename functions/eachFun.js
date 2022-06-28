function each(elements,cb)
{
    ans=[]
    for(let i=0;i<elements.length;i++)
    ans.push(cb(elements[i]))
    console.log(ans)
    return ans;
}
module.exports = each