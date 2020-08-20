import React from 'react'

function DriverCard(props){
    let nbrStars = Math.round(props.rating)
    let starRating


    if (nbrStars === 0){
        starRating = "☆☆☆☆☆"
    } else if (nbrStars === 1){
        starRating = "★☆☆☆☆"
    } else if (nbrStars === 2){
        starRating = "★★☆☆☆"
    } else if (nbrStars === 3){
        starRating = "★★★☆☆"
    } else if (nbrStars === 4){
        starRating = "★★★★☆"
    } else if (nbrStars === 5){
        starRating = "★★★★★"
    } 


    let myStyle = {
        width: "300px",
        height: "auto",
        borderRadius: "20px",
        backgroundColor: "#455EB5",
        color: "white",
        padding: "20px",
        fontSize: "12px",
        margin: "10px"
    }
   
 
    let myStyleImg = {
        height: "60px",
        width: "60px",
        objectFit: "cover",
        borderRadius: "50px"
    }

    return ( 
        <div style={myStyle}>
            <img style={myStyleImg} src={props.img}/>
            <p>{props.name}</p>
            <p>{starRating}</p>
            <p>{props.car.model} - {props.car.licensePlate}</p>
 
        </div>       
        
    )
}

export default DriverCard;