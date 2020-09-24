import React from 'react'

export default function IdCard(props) {
    return (
        <div className="id-card">

           <img src={props.picture} />
            <div>
                First Name: {props.firstName}<br/>
                Last Name: {props.lastName}<br/>
                Gender: {props.gender}<br/>
                Height: {props.height}<br/>
                Birthday: {props.birth.toDateString()}
            </div>
        </div>
    )
}