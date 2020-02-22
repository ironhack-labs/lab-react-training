import React from 'react';
import Rating from '../components/Rating'

const DriveCard = props => {
    return (
        <div className="DriverCard">
            <div className="left">
                <img alt="" src={props.picture} />
            </div>
            <div className="right">
                <h2>{props.driver}</h2>
                <div><Rating children={4}/> </div>
                <p>{props.car} {props.plate}</p>
            </div>
        </div>
    )
}

export default DriveCard;