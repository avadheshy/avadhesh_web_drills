function values(obj)
{
    ans=[]
    for(const key in obj){
    ans.push(obj[key])
    }
    return ans;

}
module.exports = values