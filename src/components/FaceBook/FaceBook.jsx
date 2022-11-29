import { useState } from 'react'
import profiles from '../../data/berlin.json';

import './FaceBook.css'

const FaceBook = () => {

    const [profile, setProfile] = useState(profiles)

    const countries = profile.map((elm, i) => {
        return elm.country
    })

    const uniqueCountries = [...new Set(countries)];

    const [country, setCountry] = useState(uniqueCountries)

    const handleCountryValue = e => {
        setCountry(e.target.value)
    }

    const buttons = country.map((elm, i) => {
        return (
            <option key={i} value={elm}>{elm}</option>
        )
    })

    const blueColor = {
        backgroundColor: `#2596be`
    }

    const whiteColor = {
        backgroundColor: 'white'
    }

    return (
        <div className='FaceBook'>
            <select onChange={handleCountryValue}>
                <option>Please choose a country</option>
                {buttons}
            </select>


            {profile.map((elm, i) => {
                const { country, firstName, img, isStudent, lastName } = elm
                return (
                    < div className='Facebook-Card' key={i} style={handleCountryValue === country ? blueColor : whiteColor}>
                        <img src={img} alt="Profile Picture" />
                        <ul>
                            <li>
                                <strong>First Name:</strong>  {firstName}
                            </li>
                            <li>
                                <strong>Last Name:</strong> {lastName}
                            </li>
                            <li>
                                <strong>Country:</strong>  {country}
                            </li>
                            <li>
                                <strong>Type:</strong> {isStudent ? 'Student' : 'Teacher'}
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div >
    )
}

export default FaceBook