import React from 'react'
import profiles from '../data/berlin.json';


export default function Facebook() {
    const faceBook = profiles.map(profile => {
        return (
            <div className="profile">
                <img src={profile.img} alt="smileyface"/>
                <p><strong>First Name:</strong> {profile.firstName}</p>
                <p><strong>Last Name:</strong> {profile.lastName}</p>
                <p><strong>Country:</strong> {profile.country}</p>
                <p><strong>Type:</strong> {profile.isStudent? 'Studying' : 'Working'}</p>
            </div>
        )
    });

    const uniqueCountries = [];
    for (let i = 0; i < profiles.length; i++){
        if (!uniqueCountries.includes(profiles[i].country)){
            uniqueCountries.push(profiles[i].country)
        }
    }
    
    // const showCountries = profiles.map(profile => {
    //     console.log('Click')
    // })

    const countryButtons = uniqueCountries.map(country => {
            return (
                <button>{country}</button>
            )
    })

    return (
        <>
            <div className="countryButtons">
                {countryButtons}
            </div>
            <div>
                {faceBook}
            </div>
        </>
    )
}
