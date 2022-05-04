import { useState } from 'react';
import profiles from './../data/berlin.json';
import './styles.css'

const FaceBook = () => {

    const [countryValue, setCountryValue] = useState('All')


    const allProfiles = profiles.map(elm => {

        return (
            <div key={elm.firstName} className={(countryValue === elm.country ? 'blue' : 'white')}>
                <div className="profilePic">
                    <img src={elm.img} alt="profilePic" />
                </div>
                <div>
                    <h6><strong>First name: </strong>{elm.firstName}</h6>
                    <h6><strong>Last name: </strong>{elm.lastName}</h6>
                    <h6><strong>Country: </strong>{elm.country}</h6>
                    <h6><strong>Type: </strong> {elm.isStudent ? 'Student' : 'Teacher'}</h6>
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