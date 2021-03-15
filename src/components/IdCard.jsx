import React from 'react'

function IdCard(props) {
    return (
        <div className='IdCard'>
            <h3 className="IdCard__lastName">Last name: {props.lastName}</h3>
            <h3 className="IdCard__firstName">First name: {props.firstName}</h3>
            <h3 className="IdCard__gender">Gender: {props.gender}</h3>
            <h3 className="IdCard__height">Height: {props.height}</h3>
            <h3 className="IdCard__birth">Birth: {props.birth}</h3>
            <img className="IdCard__picture" src={props.picture} alt=""/>
        </div>
    )
}

export default IdCard