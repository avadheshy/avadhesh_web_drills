function keys(obj)
{
    ans=[]
    for(const key in obj){
    ans.push(key)
    }
    return ans;

}
 
module.exports=keys