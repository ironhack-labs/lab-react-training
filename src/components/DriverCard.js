import React from "react"
import "./styles.css"

const DriverCard = (props) => {
    
    var { name, rating, img, car } = props
    
    return (
        <div className="license">
           <div className="licenseSection1">
            <img src={img} alt="profile-img"/>
           </div>
           <div className="licenseSection2">
                <div>
                    <h3>{name}</h3>
                </div>
                <div>
                    { rating < .9 ?  <p>☆☆☆☆☆</p> 
                    : rating < 1.9 ? <p>★☆☆☆☆</p>
                    : rating < 2.9 ? <p>★★☆☆☆</p>
                    : rating < 3.9 ? <p>★★★☆☆</p>
                    : rating < 4.9 ? <p>★★★★☆</p>
                    : rating >= 4.9 ? <p>★★★★★</p>
                    : <div></div>}
                </div>
                <div>
                    <p>{car.model} - {car.licensePlate}</p>
                    
                </div>
           </div>
        </div>
    )
    
    }
    
    export default DriverCard;
    
    