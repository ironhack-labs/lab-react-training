import React, { useState } from 'react'
import profiles from '../../data/berlin.json';
import './FaceBook.scss'

const FaceBook = () => {

    const [country, setCountry] = useState('all') 

    const handleState = (contry) => {
        setCountry(contry)
    }

    return (
        <div>

            <div className="Nav">
                <button onClick={ () => handleState('All') }>All</button>
                <button onClick={ () => handleState('England') }>England</button>
                <button onClick={ () => handleState('USA') }>USA</button>
                <button onClick={ () => handleState('Malaysia') }>Malaysia</button>
                <button onClick={ () => handleState('Germany') }>Germany</button>
            </div>

            { profiles.map((profile, id) => {
                return( 
                    <div className={`FaceBook ${country === profile.country && 'blue-facebook'}`} key={id}>
                        <img src={profile.img} height={70} alt={profile.firstName} />
                        <div>
                            <span><b>First Name: </b>{profile.firstName}</span>
                            <span><b>Last Name: </b>{profile.lastName}</span>
                            <span><b>Country: </b>{profile.country}</span>
                            <span><b>Type: </b>{profile.isStudent}</span>
                        </div>
                    </div>
                )
            }) }
        </div>
    )
}

export default FaceBook
