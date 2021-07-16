import React from 'react';

function DriverCard (props){
 
    // we make the loop here that we did in the rating component

    const number = Math.round(props.rating)

    let rating = '';
    for (let i = 0; i < 5; i++) {
        if (i < number) {
            rating += '★';    
        } else {
            rating += '☆';
        }
    }

    return(

        
        <div className="Drive-Card">

                <div className="img-pic">    
                    <img src={props.img} alt={props.alt}/>
                </div>

                <div className="card-descript">
                    <p>{props.name}</p>
                    <p>{rating}</p>
                    {props.car.model} - {props.car.licensePlate}
                </div>

        </div>
    )
}
export default DriverCard
