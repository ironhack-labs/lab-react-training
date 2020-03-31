
import React from 'react';
import FancyBoder from './FancyBoder';

const IdCard = props => {
    return (
        <FancyBoder>
        <div className="flexy">
            <div className ="columns2">
            <img src={props.picture} alt="" />
             </div>
            <div className ="columns">
           <p><b>First Name:</b> {props.firstName} </p> 
            <p><b>Last Name:</b> {props.lastName}</p> 
             <p><b>Gender:</b> {props.gender}</p>
            <p><b>Height:</b> {props.height}</p>  
            <p><b>Birth:</b> {props.birth.toDateString()}</p> 
            </div>
        </div>
        </FancyBoder>
    )
}

export default IdCard
