import React from 'react'

export default function IdCard(props) {
    return (
        <div className="id-card">
            <div className="user-img">
                <img src={props.picture} alt="user-img"/>
            </div>
        <div className="user-details">
            <div className="user-txt">
                <p>
                    <b>First name: </b>{props.firstName}
                </p>
                <p>
                    <b>Last name: </b>{props.lastName}
                </p>
                <p>
                    <b>Gender: </b>{props.gender}
                </p>
                <p>
                    <b>Height: </b>{props.height}
                </p>
                <p>
                    <b>Birth: </b>{props.birth.toDateString()}
                </p>
            </div>
        </div>
     </div>
    )
}
