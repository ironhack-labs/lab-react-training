import '../Styles/FaceBookAdvance.css';
import React, { Component } from 'react';
import profiles from '../data/berlin.json';

export class FaceBookAdvance extends Component {
  state = {
    selectedCountry: null,
  };

  handleSelect = (selectedCountry) => {
    this.setState({ selectedCountry: selectedCountry });
  };

  render() {
    const countryArrCopy = [
      ...new Set(profiles.map((profile) => profile.country)),
    ];

    return (
      <div>
        <div className="buttons">
          <button
            style={{
              backgroundColor:
                this.state.selectedCountry === null ? 'lightblue' : 'white',
            }}
            onClick={(event) => {
              this.handleSelect(null);
            }}
          >
            All
          </button>

          {countryArrCopy.map((country, index) => (
            <button
              onClick={(event) => {
                //console.log('click');
                //console.log(event.target);
                this.handleSelect(country);
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
            <img src={profile.img} alt="" />
            <div className="profile-info-wrapper">
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

export default FaceBookAdvance;
