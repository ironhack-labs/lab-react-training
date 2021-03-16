import React from 'react';
import './../views/IdCard.css'

const IdCard = (props) => {
    return (
        <div className="IdCard">
            <img src={props.picture} alt=""/>
            <aside>
                <p>First Name: {props.firstName}</p>
                <p>Last Name: {props.lastName}</p>
                <p>Gender: {props.gender}</p>
                <p>Height:  {props.height}</p>
                <p>Birth: {props.birth.getDate()} {props.birth.getFullYear()}</p>
            </aside>
        </div>
    )
}

export default IdCard
