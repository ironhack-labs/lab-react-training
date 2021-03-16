import React from "react";
import Rating from './../Components/Rating';
// import "../styles/DriverCard.css";

const DriverCard = (props) => {
    // function stars(note) {
       
    //    let rating = Math.round(note);
    //    let text = ''; 
    //    for (let i = 0; i < rating; i++) {
    //        text+='★';
    //    }
    //    while (text.length < 5) {
    //     text+='☆';
    //    }
    // return text;
    // }




    return (
        <div className="DriverCard" >
            {
                <div>
                    <span>
                        <img src={props.img} alt="picture" style={{width: 150}}/><br />
                
                        {props.name} <br />
                        {/* {stars(props.rating)} <br /> */}
                        <Rating>
                            {props.rating}
                        </Rating><br />
                        {props.car.model} <br />
                        {props.car.licensePlate} <br />
                    </span>
                </div>
            }
        </div>);
};

export default DriverCard;