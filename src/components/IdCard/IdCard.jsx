
import React from "react"
import './IdCard.css'


const IdCard = (props) => {
    return (
        <div className="profileCard">
            <div className="profileImg">
                <img
                    src={props.picture}
                    alt="profile"
                />
            </div>
            <div className="profileText">
                <p><span>First Name:</span> {props.firstName}</p>
                <p><span>Last Name:</span> {props.lastName}</p>
                <p><span>Gender:</span> {props.gender}</p>
                <p><span>Height:</span> {props.height}</p>
                <p><span>Birth Date:</span> {props.birth.toDateString()}</p>
            </div>
        </div>
    )
}



export default IdCard