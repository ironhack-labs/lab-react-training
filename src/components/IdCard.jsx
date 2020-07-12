import React from 'react'

export default function IdCard(props) {
    return (
        <div className="id-card" key={props.lastName}>
            <div className="id-card__img"
                style={{backgroundImage: `url(${props.img})`}}
            />
            
            <div className="id-card__info">
                <label><strong>First name: {props.firstName}</strong></label>
                <label><strong>Last name: {props.lastName}</strong></label>
                <label><strong>Country: {props.country}</strong></label>
                <label>
                    <strong>Type: </strong>
                    {props.isStudent === true ? 'Student' : 'Teacher'}
                </label>
            </div>  
        </div>
    )
    
}
