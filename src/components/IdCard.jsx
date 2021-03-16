import React from 'react'

function IdCard(props) {
    
    
    return (
        <>
        <div>
        <img src={props.picture} alt="portrait"/>
        </div>
        <div>{props.firstName}</div>
        <div>{props.lastName}</div>
        <div>{props.gender}</div>
        <div>{props.height}</div>
        <div>{props.birth}</div>
        </>
    )
}

export default IdCard


