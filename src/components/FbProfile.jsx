import React from 'react'

export default function FbProfiles({firstName, lastName, country, isStudent, img}) {

    const role = isStudent ? 'Student' : 'Teacher'

    return (
        <div className="container">
            <img src={img} alt=""/>
            <div>
                <h3>First Name: <span>{firstName}</span></h3>
                <h3>Last Name: <span>{lastName}</span></h3>
                <h3>Country: <span>{country}</span></h3>
                <h3>Type: <span>{role}</span></h3>
            </div>
        </div>
    )
}
