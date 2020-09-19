import React from 'react'

function IdCard(props) {
    return (
        <div className="id-card">
            <img src={props.picture} alt={props.firstName} />
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
            <p>{props.height}</p>
            <p>{props.birth.toLocaleString('es-ES')}</p>
            <p>{props.gender}</p>
        </div>
    )
}

export default IdCard