import { useState } from 'react'

import profiles from '../../data/berlin.json';

const Facebook = () => {

    const [facebookValue, setFacebookValue] = useState({ profiles: [...profiles] })

    return (
        <>
            {facebookValue.profiles.map((movie, idx) => {

                return (

                    <div key={idx}>
                        <img src={movie.img} alt={movie.firstName} />
                        <p>FirstName {movie.firstName}</p>
                        <p>LastName {movie.firstName}</p>
                        <p>Country {movie.country}</p>
                        <p>Type {movie.isStudent ? "Estudiante" : "Teacher"}</p>
                    </div>
                )

            })}

        </>
    )
}

export default Facebook