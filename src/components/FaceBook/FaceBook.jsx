import './FaceBook.css'


import profiles from '../../data/berlin.json';
import { useState } from 'react';

const FaceBook = () => {

    const [countryState, setCountry] = useState('default')

    const handleCountry = (countrySelected) => {
        setCountry(countrySelected)
    }

    return (

        <>

            <button onClick={() => handleCountry('ALL')} style={{ backgroundColor: countryState === 'ALL' ? 'blue' : 'white', }}>ALL</button>
            <button onClick={() => handleCountry('England')} style={{ backgroundColor: countryState === 'England' ? 'blue' : 'white', }}>ENGLAND</button>
            <button onClick={() => handleCountry('USA')} style={{ backgroundColor: countryState === 'USA' ? 'blue' : 'white', }}>USA</button>
            <button onClick={() => handleCountry('Malaysia')} style={{ backgroundColor: countryState === 'Malaysia' ? 'blue' : 'white', }}>MALAYSIA</button>
            <button onClick={() => handleCountry('Germany')} style={{ backgroundColor: countryState === 'Germany' ? 'blue' : 'white', }}>GERMANY</button>


            {profiles.map(({ firstName, lastName, country, img, isStudent }, i) => {

                let color = country === countryState || countryState === 'ALL' ? 'blue' : 'white'
                return (
                    <div key={i} className="fbCard" style={{ backgroundColor: color }}>
                        <div>
                            <img src={img} alt={firstName} />
                        </div>
                        <div>
                            <p><strong> FIRST NAME: </strong>{firstName}</p>
                            <p><strong> LAST NAME: </strong>{lastName}</p>
                            <p><strong> COUNTRY: </strong>{country}</p>
                            <p><strong> TYPE: </strong>{isStudent ? 'STUDENT' : 'TEACHER'}</p>
                        </div>
                    </div>
                )
            })}
        </>

    )
}

export default FaceBook
