import React, { useState } from 'react';
import facebookData from '../data/berlin.json';

function Facebook() {
    // Create a color property on every object
    const [ coloredCountry, setColoredCountry ] = useState('');
    let uniqueCountries = facebookData.map(person => person.country).filter((country, index, countriesArr) => countriesArr.indexOf(country) === index);

    const updateCountryColor = country => {
        setColoredCountry(country);
    }

    return (
        <div>
            {uniqueCountries.map((country, index) => {
                return <button key={index} onClick={() => updateCountryColor(country)}>{country}</button>
            })}
            {facebookData.map((person, index) => {
                return (
                    <div style={{ backgroundColor: `${person.country === coloredCountry ? 'green' : 'white'}` }} className="facebook-basic-container" key={index}>
                        <img src={person.img}></img>
                        <div className="facebook-basic-details-container">
                            <p><b>First name:</b>  {person.firstName}</p>
                            <p><b>Last name:</b>  {person.lastName}</p>
                            <p><b>Country:</b>  {person.country}</p>
                            <p><b>Type:</b>  {person.isStudent ? "Student" : "Teacher"}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Facebook
