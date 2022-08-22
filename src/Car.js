
function Car(){
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


    return(
        cars.map(car =>
         <CreateCars car ={car} />)
         //Always remeber to capitalise your compenents when calling them :)
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

export default Car
