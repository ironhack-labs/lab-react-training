import React from 'react'

function FBDetails(props) {
    return ( 
        <div className="fb-text">
            <p><strong>First name:</strong>  {props.profile.firstName}</p>
            <p><strong>Last name:</strong>  {props.profile.lastName}</p>
            <p><strong>Country:</strong>  {props.profile.country}</p>
            {props.profile.isStudent ? <p><strong>Type:</strong> Student</p> : <p><strong>Type:</strong> Teacher</p> }
        </div>    
    )
}

export default FBDetails;