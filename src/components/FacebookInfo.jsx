import React from 'react'


function FacebookInfo(props) {
    return (
        <div className="facebook-info">
            <p>
                <strong> First Name </strong>
                {props.firstName}
            </p>
            <p>
                <strong> Last Name </strong>
                {props.lastName}
            </p>
            <p>
                <strong> Country </strong>
                {props.country}
            </p>
            <p>
                <strong> Type </strong>
                {`${props.isStudent ? 'Student' : 'Teacher'}`}
            </p>
        </div>
    )
}

export default FacebookInfo