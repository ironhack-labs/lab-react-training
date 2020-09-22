import React from 'react'


function FacebookPofile(props) {
    return (
        <div>
            <p><b>First name:</b> {props.firstName}</p>
            <p><b>Last name:</b> {props.lastName}</p>
            <p><b>Country</b> {props.country}</p>
            <p><b>Type:</b> {props.isStudent ? 'Student' : 'Teacher'}</p>
        </div>
    )
}

export default FacebookPofile