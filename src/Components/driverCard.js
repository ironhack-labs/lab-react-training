import React,{useState} from "react"

export const DriverCard = (props)=>{
    const {name,rating,img,car} = props
    const Round = Math.round(rating)
    let calif;

    switch (Round) {
        case 0:
            calif = "☆☆☆☆☆"
            break;
        case 1:
            calif = "★☆☆☆☆"
            break; 
        case 2:
            calif = "★★☆☆☆"
            break;  
        case 3:
            calif = "★★★☆☆"
            break;  
        case 4:
            calif = "★★★★☆"
            break; 
        case 5:
            calif="★★★★★"
            break;
        default:
            break;
    }
    
    return (
        <div className="Card">
            <img src={img} alt="Img"/>
            <div className="Description">
                <h2>{name}</h2>
                <h2>{calif}</h2>
                <p>{car.model}{car.licensePlate}</p>
            </div>
        </div>

    )

}