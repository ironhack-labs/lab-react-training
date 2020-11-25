 import React , {Component} from 'react'

 function IdCard(props) {
    return (
        <div>
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height/100}m</p>
            <p>Birth: {props.date}</p>
            <img src={props.picture} alt='' />
        </div>
    )

}

 export default IdCard