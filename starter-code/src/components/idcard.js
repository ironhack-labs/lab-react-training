import React from 'react';

const IdCard = props => {
    console.log('id')
    return (
        <div className = "IdCard box">
            <div >
                <img alt="" src={props.picture} />
            </div> 
            <div className="right">
                <strong>First name: </strong> {props.firstname}<br></br>
                <strong>Last name: </strong> {props.lastname}<br></br>
                <strong>Gender: </strong> {props.gender}<br></br>
                <strong>Height: </strong> {props.height}<br></br>
                <strong>Birth: </strong> {props.birth}<br></br>
            </div>
            
        </div>
    )
}

export default IdCard;