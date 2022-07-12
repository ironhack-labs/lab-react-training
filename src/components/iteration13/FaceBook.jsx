import { useState } from "react";
import profiles from './../../data/berlin.json'
import './FaceBook.css'

const FaceBook = () => {

    const [countryValue, setCountryValue] = useState()

    const allProfiles = profiles.map(elm => {

        return (
            <div key={elm.firstName} className={(countryValue === elm.country ? 'blue' : 'white')}>
                <div className="profile">
                    <img src={elm.img} alt='profile image' />
                </div>
                <div>
                    <p><strong>First name:</strong>{elm.firstName}</p>
                    <p><strong>Last name:</strong>{elm.lastName}</p>
                    <p><strong>Country:</strong>{elm.country}</p>
                    <p><strong>Type:</strong>{elm.isStudent ? 'Student' : 'Teacher'}</p>
                </div>
            </div>
        )
    })

    return (
        <div>
            <button onClick={() => setCountryValue('All')}>All</button>
            <button onClick={() => setCountryValue('England')}>England</button>
            <button onClick={() => setCountryValue('USA')}>USA</button>
            <button onClick={() => setCountryValue('Malaysia')}>Malaysia</button>
            <button onClick={() => setCountryValue('Germany')}>Germany</button>
            <button>...</button>

            {allProfiles}

        </div>
    )
}

export default FaceBook