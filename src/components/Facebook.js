import React from 'react'
import profiles from '../data/berlin.json'

function Facebook() {
    
    return (
        <div>
            {profiles.map(el => (
                <div className="IdCard box">
                    <div>
                        <img src={el.img} alt=""/>
                    </div>
                    <div>
                        <p><strong>First Name: </strong>{el.firstName}</p>
                        <p><strong>Last Name: </strong>{el.lastName}</p>
                        <p><strong>Country: </strong>{el.country}</p>
                        <p><strong>Type: </strong>{el.isStudent ? 'Student': "Teacher"}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Facebook
