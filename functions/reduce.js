function reduce(elements,cb,startVal)
{

    let ans=startVal
    for(let i=0;i<elements.length;i++)
    ans+=cb(parseInt(0),parseInt(elements[i]))
    return ans
}

module.exports=reduce