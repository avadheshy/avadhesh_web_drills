function allCars(data){
        let models=[]
        for(let i=0;i<data.length;i++){
                let model=data[i]['car_model']
                models.push(model)
        }
        models=models.sort()
        return models
}

module.exports =  allCars
