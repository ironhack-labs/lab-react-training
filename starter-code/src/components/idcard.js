import React from 'react';

const IdCard = props => {
    console.log('id')
    return (
        <div className = "idcards">
            <div>
                <img alt="" src={props.picture} />
            </div> 
            <div>
                <h3>Lastname: {props.lastname}</h3>
                <h3>Firstname: {props.firstname}</h3>
                <h3>Gender: {props.gender}</h3>
                <h3>Height: {props.height}</h3>
                <h3>Birth: {props.birth}</h3>
            </div>
            
        </div>
    )
}

export default IdCard;