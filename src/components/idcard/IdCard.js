import React from 'react';
import './IdCard.css';

//its functional, doesnt need extending component, dosnt have state
function IdCard(props){
    return (
        <div className="Card">
            <img className="Pic" src={props.picture} width="150" alt="gaddam" />
            <div className="Info">
                <p> First Name: {props.firstName} </p>
                <p> Last Name: {props.lastName} </p>
                <p> Gender: {props.gender} </p>
                <p> Height: {props.height} </p>
                <p> Birthday: {props.birth} </p>
            </div>
        </div>
    )
}
export default IdCard;