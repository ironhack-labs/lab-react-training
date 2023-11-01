/**Create a FaceBook component that displays the list of all profiles coming from the file src/data/berlin.json. Remember to import the json data in the component: */

/**Update your FaceBook component and add a button for each country the students come from; Each student object has a country property. When the user clicks on the button with the country name (example: USA), add a blue background to all the profiles where the country is the one selected. */

/** Bonus:

By default, only display the picture. Then, when a user clicks on a picture, display more information
Add sort buttons
Add a search input*/

import React, { useState } from 'react';
import profiles from '../data/berlin.json';

function FaceBook() {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [filteredProfiles, setFilteredProfiles] = useState(profiles);

    const uniqueCountries = [...new Set(profiles.map((profile) => profile.country))];

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
        const newFilteredProfiles = profiles.filter((profile) => profile.country === country);
        setFilteredProfiles(newFilteredProfiles);
    };

    return (
        <div>
            <div className="buttons">
                <button onClick={() => handleCountryClick('')} className={selectedCountry === '' ? 'selected' : ''}>
                    All
                </button>
                {uniqueCountries.map((country) => (
                    <button
                        key={country}
                        onClick={() => handleCountryClick(country)}
                        className={selectedCountry === country ? 'selected' : ''}
                    >
                        {country}
                    </button>
                ))}
            </div>
            {filteredProfiles.map((profile, index) => (
                <div className="id-card" key={index}>
                    <img src={profile.img} alt="img" />
                    <div>
                        <p>
                            <strong>First name: </strong>
                            {profile.firstName}
                        </p>
                        <p>
                            <strong>Last name: </strong>
                            {profile.lastName}
                        </p>
                        <p>
                            <strong>Country: </strong>
                            {profile.country}
                        </p>
                        <p>
                            <strong>Type: </strong>
                            {profile.isStudent ? 'Student' : 'Teacher'}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FaceBook;
