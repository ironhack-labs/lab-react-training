import React from 'react'

const IdCard = (props) => {
    console.log(props)
    return (
        <div>
            <h1>First name: {props.data.firstName}</h1>
            <h1>Last name: {props.data.lastName}</h1>
            <h1>Gender: {props.data.gender}</h1>
            <h1>Height: {props.data.height}</h1>
            <h1>Birth: {props.data.birth.toLocaleDateString()}</h1>
        </div>
    )
}

export default IdCard