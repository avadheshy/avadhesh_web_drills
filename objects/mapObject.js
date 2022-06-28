function map(obj,cb)
{
    for (var key in obj)
    obj[key] =cb(obj[key]);
    return obj

}
module.exports = map