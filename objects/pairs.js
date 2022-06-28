function pairs(obj)
{
    ans=[]
    for(const key in obj){
        arr=[key,obj[key]]
    ans.push(arr)
    }
    return ans;

}
module.exports = pairs