import React from 'react';
import "./Facebook.css";
import profiles from '../../data/berlin.json';

export default class Facebook extends React.Component {
    state = {
        selectedCountry: null,
    };

    onSelect = (selectedCountry) => {
        this.setState({ selectedCountry: selectedCountry });
    };
    
    render() {
    const countries = [...new Set(profiles.map((profile) => profile.country))];
      
    return (
      <div className='Facebook'>
        <div className="buttons">
          <button
            style={{
              backgroundColor:
                this.state.selectedCountry === null ? 'lightblue' : 'white',
            }}
            onClick={(event) => {
              this.onSelect(null);
            }}
          >
            All
          </button>

          {countries.map((country, index) => (
            <button
              onClick={(event) => {
                this.onSelect(country);
              }}
              style={{
                backgroundColor:
                  this.state.selectedCountry === country
                    ? 'lightblue'
                    : 'white',
              }}
              key={index}
            >
              {country}
            </button>
          ))}
        </div>

        {profiles.map((profile, index) => (
          <div
            className="profile"
            key={index}
            style={{
              backgroundColor:
                this.state.selectedCountry === profile.country
                  ? 'lightblue'
                  : 'white',
            }}
          >
            <img src={profile.img} alt="Profile image" />
            <div className="profileInfo">
              <p>
                <b>First name: </b>
                {profile.firstName}
              </p>
              <p>
                <b>Last name: </b>
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
          </div>
        ))}
      </div>
    );
    }
}