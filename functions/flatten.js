function flatten(ary, ret = []) 
{
    for (const entry of ary) {
        if (Array.isArray(entry) ){
            flatten(entry, ret);
        } else {
            ret.push(entry);
        }
    }
    return ret;
}
module.exports=flatten
