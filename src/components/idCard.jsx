import React from 'react'
import "../styles/iteration1.css"

const IdCard = (props) => {
    return (
        <div className="user">
            <div>
                <img src={props.picture} alt="user"/>
            </div>
            <div>
                <ul>
                    <li><strong>First name : </strong>{props.firstName}</li>
                    <li><strong>Last name : </strong>{props.lastName}</li>
                    <li><strong>Gender : </strong>{props.gender}</li>
                    <li><strong>Height : </strong>{props.height}</li>
                    <li><strong>Birth : </strong>{props.birth}</li>
                </ul>
            </div>
        </div>
    )
}

export default IdCard

