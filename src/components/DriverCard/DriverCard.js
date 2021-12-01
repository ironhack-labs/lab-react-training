import React from 'react';
import '../DriverCard/DriverCard.Styles.css'

const DriverCard =(props)=>{
    const {name, rating, img, car} = props
    
    const ratingStar =()=>{
        if(rating <= 4.4){
                return "★★★★☆"
            }else{
                return "★★★★★"
            }   
    }
        
    
    return (
        <div id="containerDiv">
            <div>
                <img id="imgDriver" src={img} alt={name}></img>
            </div>

            <div>
                <p>{name}</p>
                <p>{ratingStar()}</p>
                <p>{car.model}-{car.licensePlate}</p>
            </div>

        </div>
      
    )
    }
    
    export default DriverCard;