import { useState } from 'react';
import profiles from '../../data/berlin.json';
import './FaceBookStyle.css'

function FaceBook() {
    const countries = [];
    const [countryStyle, setCountryStyle] = useState('all');
    const [filter, setFilter] = useState(profiles);

    profiles.forEach(profile => {
        if (!countries.length) {
          countries.push(profile.country);
        } else {
          const found = countries.find((country) => country === profile.country);
          if(!found) countries.push(profile.country);
        }
    });

    const countrySelect = (e, country) => {
        [...document.getElementsByClassName('FBbutton')]
        .forEach(btn => btn.className = 'FBbutton');
        e.target.className = 'FBbutton isActive';
        setCountryStyle(country);
    }

    const searchBar = (e) => {
        const searchResult = profiles.filter((profile) =>
          profile.firstName
            .toLocaleLowerCase()
            .includes(e.target.value.toLowerCase())
        );
        setFilter(searchResult);
    }

    return (
      <div className='FacebookContainer'>
        {countries.map((country) => (
          <button
            className="FBbutton"
            key={country}
            onClick={(e) => countrySelect(e, country)}
          >
            {country}
          </button>
        ))}

        <div className='inputContainer'>
            <input placeholder='Search for a profile' onChange={searchBar}/>
        </div>

        {filter.map((profile) => {
            let classSetup = profile.country === countryStyle ? "FaceBook isActive" : "FaceBook";
            return <div key={profile.firstName} className={classSetup}>
                        <div className="imgDiv">
                            <img alt="" src={profile.img} />
                        </div>
                        <div className="infoDiv">
                            <p>
                            <b>First name: </b>
                            {profile.firstName}
                            </p>
                            <p>
                            <b>Lastname: </b>
                            {profile.lastName}
                            </p>
                            <p>
                            <b>Country: </b>
                            {profile.country}
                            </p>
                            <p>
                            <b>Type: </b>
                            {profile.isStudent ? 'Student' : 'Teacher'}
                            </p>
                        </div>
                    </div>;
        })}
      </div>
    );
}

export default FaceBook;