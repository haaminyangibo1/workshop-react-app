
function SingleCar(){
    let cars = [
        {
            brand: 'Tesla',
            colour: 'blue',
            year: 2022
        },
    
        {
            brand: 'Ferrari',
            colour: 'red',
            year: 1970
        },
    
        {
            brand: 'Ford',
            colour: 'grey',
            year: 2015
        }
    ]

    let foundCar

    // the for in loop wasn't outputting the correct values!!!!
    //Extension could be to try and fix this !


    // for(let val in cars){
    //     if(cars[val].brand === 'Tesla'){
    //         foundCar = val
    //     }
    // }



    for(let i = 0; i < cars.length; i++){
        if(cars[i].brand === 'Tesla'){
            foundCar = cars[i]
        }
    }

    return(
      <CreateCars car ={foundCar}/>   
      )
}

function CreateCars(props){
    return(
    <div>
        <h1> {props.car.brand}</h1>
         <h2> The colour of the car is {props.car.colour}</h2>
        <h3> The year was made is {props.car.year} </h3>
        </div>
    )
}

export default SingleCar


