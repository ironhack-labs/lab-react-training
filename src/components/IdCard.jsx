import React from 'react';


function IdCard(props) {
    
    const date = props.birth; 
    console.log()
    return (
        <div className="IdCard">
            <div className="photoPic">
                <img src={props.picture} alt='{props.firstName}picture'></img>
            </div>
            <h4>First Name: {props.firstName}</h4>
            <h4>Last Name: {props.lastName}</h4>
            <h4>Gender: {props.gender}</h4>
            <h4>Height: {props.height} cm</h4>
            <h4>Birth: {JSON.stringify(date).replace(/^"(.*)"$/, '$1')}</h4>

        </div>
    )
    
}
export default IdCard;