function lastCar(data){
    for(let i=0;i<data.length;i++)
    {
        if(data[i]['id']==50)
        {
            let make=data[i].car_make
            let model=data[i]['car_model']
           return `Last car is ${make} ${model}`
        }
    }
}

module.exports = lastCar