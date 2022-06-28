function defalt(obj,prop){
    if (obj[prop] !== undefined) return obj[prop];
    else return 0;

}
module.exports=defalt