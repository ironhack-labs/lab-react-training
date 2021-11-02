import React from 'react';
import './DriverCard.css';

function DriverCard(props) {


    return (
        <section className="DriverCard">
            <div className="content-container">
                <img class="image" src={props.img} />

                <div>
                    <p>{props.name}</p>
                    <p>{props.rating}</p>
                    <p>{props.car.model}</p>
                    <p>{props.car.licensePlate}</p>
                </div>
            </div>
        </section>
    )


}


export default DriverCard;