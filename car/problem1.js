
function car(carsData,ids)
{
	for(let i=0;i<carsData.length;i++)
	{
	    if(carsData[i]['id']===ids)
	    {
		let make=carsData[i].car_make
		let model=carsData[i]['car_model']
		let year=carsData[i]['car_year']
		return `car ${ids} is a ${make} ${model} ${year}`
	    }
	}
	return " id is out of range";
}
module.exports = car
