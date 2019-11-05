import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
    return (
        <div className="black-border d-flex">
            <div className="col-4 pt-4">
                <img src={props.picture} alt={props.firstName}/> 
            </div>
            <div className="col-8">
                <p> 
                    <strong>First Name: </strong> {props.firstName}
                </p>
                <p> 
                    <strong>Last Name: </strong> {props.lastName}
                </p>
                <p> 
                    <strong>Gender: </strong> {props.gender}
                </p>
                <p> 
                    <strong>Height: </strong> {props.height}
                </p>
                <p> 
                    <strong>Birth: </strong> 
                    {props.birth.getMonth()+1+'/'+props.birth.getDate()+'/'+props.birth.getFullYear()}
                </p> 
            </div>
        </div>
    )
}

export default IdCard;
