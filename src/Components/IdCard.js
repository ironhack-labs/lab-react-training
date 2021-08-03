import React from 'react' 

const IdCard = (props) => {
    return(
        <h3>
            <p>Last Name: {props.lastName}</p>
            <p>First Name: {props.firstName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth: {props.birth.toDateString()}</p>
            <img src = {props.picture} alt=""/>
        </h3>
    )
}

export default IdCard