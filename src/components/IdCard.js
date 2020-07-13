import React from 'react'

function IdCard(props) {

    return (
        <div className="id-card">
            <div>
                <img src={props.picture} alt="Profile pic" />
            </div>
            <div>
                <ul>
                    <li>First name: {props.firstName}</li>
                    <li>Last name: {props.lastName}</li>
                    <li>Gender: {props.gender}</li>
                    <li>Height: {props.height}</li>
                    <li>Birth: {props.birth}</li>
                </ul>
            </div>
        </div>
    )
}

export default IdCard