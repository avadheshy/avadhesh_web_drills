function audiBmw(data)
{
    let cars=[]
    for(let i=0;i<data.length-1;i++)
    {
        let model=data[i]['car_make']
        if(model=="Audi" || model=="BMW")
        cars.push(data[i])
    
    }
    return cars
}
module.exports = audiBmw
