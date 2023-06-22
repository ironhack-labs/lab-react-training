import React from 'react';
import profiles from '../data/berlin.json';
import { useState } from 'react';

function FaceBook() {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const allCountries = profiles.map(profile => profile.country);
    const uniqueCountriesSet = new Set(allCountries);
    const uniqueCountries = Array.from(uniqueCountriesSet);

    return (
        <div>
             {uniqueCountries.map((country, index) => (
                <button
                    key={index}
                    onClick={() => setSelectedCountry(country)}
                    style={{ backgroundColor: selectedCountry === country ? 'blue' : 'transparent', color: selectedCountry === country ? 'white' : 'black' }}
                >
                    {country}
                </button>
            ))}
            {profiles.map((profile, index) => (
                <div key={index} style={{
                    display: "flex",
                    border: "1px solid black",
                    margin: "10px",
                    padding: "10px",
                    backgroundColor: profile.country === selectedCountry ? 'lightblue' : 'transparent'
                }}>
                    <img src={profile.img} 
                        alt={`${profile.firstName} ${profile.lastName}`} 
                        style={{
                            marginRight: "10px", 
                            width: "150px",
                        }}/>
                    <div>
                        <p><strong>First Name :</strong>  {profile.firstName}</p>
                        <p><strong>Last name : </strong>{profile.lastName}</p>
                        <p><strong>Country :</strong> {profile.country}</p>
                        <p><strong>Type :</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FaceBook;

