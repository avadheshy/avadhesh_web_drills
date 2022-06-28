function yearsLesThen2000(data)
{
    let count=0
    for(let i=0;i<data.length-1;i++)
    {
        let year=parseInt(data[i]['car_year'])
        if(year<2000)
        count++
    }
    return count
}
module.exports = yearsLesThen2000
