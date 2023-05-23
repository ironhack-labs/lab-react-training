import React from 'react'
import profiles from "../../data/berlin.json"

const FaceBook = () => {
    // Obtener un array de los países sin repeticiones.
    const uniqueCountries = [...new Set(profiles.map(profile => profile.country))];
    return (
        <div className='facebook-container'>
            {uniqueCountries.map((country, index) => {
                return <button key={index}>{country}</button>
            })}
            {profiles.map((profile, index) => {
                return (
                    <div className='flex mt-5 facebook-card' key={index}>
                        <img src={profile.img} alt="" width="150px" />
                        <div>
                            <p>Fisrt Name: {profile.firstName}</p>
                            <p>Last Name: {profile.lastName}</p>
                            <p>Country: {profile.country}</p>
                            <p>Type: {profile.isStudent ? "Student" : "Teacher"}</p>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default FaceBook