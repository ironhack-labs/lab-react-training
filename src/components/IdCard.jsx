import React from 'react';
import '../App.css'

const IdCard = (props) => {
    return(
        <section className = "id_card">
        <div>
            <img src={props.picture} alt="profile pic"></img>
        </div>
        <div>
            <p>First name:{props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Birth: {props.birth.toDateString()}</p>
        </div>
        </section>
    )
}
export default IdCard;