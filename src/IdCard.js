import React from 'react';

function IdCard(props) {
    return(
        <>
        <div>
        <img src= {props.picture} alt= ""/> <br/>
        <strong> Last Name:</strong> {props.lastName} <br/>
        <strong> First Name:</strong> {props.firstName} <br/>
        <strong> Gender: </strong> {props.gender} <br/>
        <strong> Height: </strong> {props.height} <br/>
        <strong> Birth: </strong> {props.birth} <br/>
        
        </div>
        </>
    );
    

}

export default IdCard;