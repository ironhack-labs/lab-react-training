import { useState } from 'react';
import profiles from './../data/berlin.json'

const FaceBook = () => {
    const [country, setCountry] = useState(null);

    const isSelectedCountry = (selectedCountry, profileCountry) => selectedCountry === profileCountry;

    const setSelectedCountry = (selectedCountry) => setCountry(selectedCountry === 'All' ? null : selectedCountry);

    return (
        <div>
            {['All', 'England', 'USA', 'Germany', 'Malaysia'].map((countryOption, i) => (
                <button key={i} onClick={() => setSelectedCountry(countryOption)}>
                    {countryOption}
                </button>
            ))}

            {profiles.map((profile, i) => (
                <div key={i} style={{ backgroundColor: isSelectedCountry(country, profile.country) ? 'turquoise' : '' }}>
                    <div>
                        <div >
                            <img src={profile.img} alt="img" />
                        </div>
                        <div >
                            <h4><b>First Name: </b>{profile.firstName}</h4>
                            <h4><b>Last Name: </b>{profile.lastName}</h4>
                            <h4><b>Country: </b>{profile.country}</h4>
                            <h4><b>Type: </b>{profile.isStudent ? 'Student' : 'Teacher'}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FaceBook;