import React, { Component } from 'react';
import profiles from '../data/berlin.json';
import { v4 as uuid } from 'uuid';
import './FaceBook.css';

export default class FaceBook extends Component {
  state = {
    checkedCountry: '',
  };

  clickCountry = (country) => {
    this.setState(() => {
      return {
        checkedCountry: country,
      };
    });
  };

  render() {
    const countries = profiles.map((profile) => profile.country);
    const uniqueCountries = [...new Set(countries)];
    //   console.log(uniqueCountries);

    const fbCountries = uniqueCountries.map((country) => {
      return (
        <button
          key={uuid()}
          //   type="button"
          className="country-button"
          //   Because you are calling that function instead of passing the function to onClick, change that line to this:
          onClick={() => this.clickCountry(country)}

          //   value={country}
        >
          {country}
        </button>
      );
    });
    const fbProfiles = profiles.map((profile) => {
      return (
        // <div key={uuid()} className="fb-profile">
        <div
          key={uuid()}
          className={
            this.state.checkedCountry === profile.country
              ? 'fb-profile checked'
              : 'fb-profile'
          }
        >
          <img src={profile.img} alt={profile.firstName} />
          <div className="details">
            <div className="first-name">
              <strong>First name </strong>
              {profile.firstName}
            </div>
            <div className="last-name">
              <strong>Last name </strong>
              {profile.lastName}
            </div>
            <div className="country">
              <strong>Country </strong>
              {profile.country}
            </div>
            <div className="type">
              <strong>Type </strong>
              {profile.isStudent ? 'Student' : 'Teacher'}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {fbCountries}
        {fbProfiles}
      </div>
    );
  }
}
