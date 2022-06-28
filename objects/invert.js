function invert(obj,cb)
{
    ans={}
    for (var key in obj)
    ans[obj[key]]=key
    return ans

}
module.exports = invert