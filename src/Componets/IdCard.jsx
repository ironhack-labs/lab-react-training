import React from 'react'

const IdCard = (props) => {
    return (
        <div className='idCard'>

            <p>{props.lastName}</p>
            <p>{props.firstName}</p>
            <p>{props.gender}</p>
            <p>{props.height}</p>
            <p>{props.birth}</p>
            <img src={props.picture} alt={`IdCard of props.lastName`}/>

        </div>
    )
}

export default IdCard
