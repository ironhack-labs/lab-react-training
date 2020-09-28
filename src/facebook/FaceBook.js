import React, { Component } from 'react';
import profiles from '../data/berlin.json';
import './FaceBook.css';

const countries = profiles.map((profile) => {
  return profile.country;
});
const uniqueCountries = [...new Set(countries)];

export default class FaceBook extends Component {
  state = {
    fbProfiles: profiles,
    activeCountries: [],
  };

  toggleCountry = (e) => {
    const newArr = [...this.state.activeCountries];

    newArr.includes(e) ? newArr.splice(newArr.indexOf(e), 1) : newArr.push(e);

    this.setState({
      activeCountries: newArr,
    });
  };

  render() {
    return (
      <div>
        {uniqueCountries.map((country, i) => (
          <button
            id="country-button"
            onClick={() => this.toggleCountry(country)}
            key={i}
            className={
              this.state.activeCountries.includes(country)
                ? 'active-button'
                : null
            }
          >
            {country}
          </button>
        ))}
        {this.state.fbProfiles.map((profile, i) => (
          <div
            className="fb-card"
            id={
              this.state.activeCountries.includes(profile.country)
                ? 'active-profile'
                : null
            }
            key={i}
          >
            <img
              className="profile-pic"
              src={profile.img}
              alt={profile.firstName}
            />
            <div className="text-info">
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
}
