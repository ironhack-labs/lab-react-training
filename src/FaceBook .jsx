import profiles from './data/berlin.json';
import { useState } from 'react';
import './facebook-style.css'

const Facebook = () => {
    const [profileValue, setProfileValue] = useState(profiles)

    // const countryVer = profiles.map(eachProfile => {
    //     if (eachProfile.country === 'England') {

    //     }
    //     console.log(eachProfile.country)
    // })

    return (
        <div >
            <button>All</button>
            <button >England</button>
            <button>EEUU</button>
            <button>Malaysia</button>
            <button>Germany</button>


            {profileValue.map((eacheProfile, idx) => {
                const { img, firstName, lastName, country, isStudent } = eacheProfile

                return (
                    <div className='card ' >
                        <img src={img} alt={firstName} />
                        <div key={idx}>
                            <p> <strong>First Name:</strong> {firstName} </p>
                            <p> <strong>Last Name:</strong> {lastName} </p>
                            <p> <strong>Country: </strong> {country} </p>
                            <p> <strong>Type: </strong> {isStudent ? 'Student' : 'Teacher'} </p>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}


export default Facebook