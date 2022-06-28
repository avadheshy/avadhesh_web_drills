function allTheYears(data)
{
        let yearData=[]
        for(let i=0;i<data.length;i++)
        {
                let year=data[i]['car_year']
                yearData.push(year)
        }
        return yearData
}
module.exports = allTheYears
