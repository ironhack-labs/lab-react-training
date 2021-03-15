import React from 'react'
import '../styles/IdCard.css'

const IdCard = (props) => {
    console.log(props)


    return (

        <div className="box"> 
           
            <img className="picture" src={props.picture} alt="profile headshot"></img>
            <ul className="list">
                <li><b>First name</b>: {props.firstName}</li>
                <li><b>Last name</b>: {props.lastName}</li>
                <li><b>Gender</b>: {props.gender}</li>
                <li><b>Height</b>: {props.height}m</li>
                <li><b>Birth</b>: {props.birth.toDateString()}</li>
            </ul>  
        </div>
    )
}

export default IdCard
