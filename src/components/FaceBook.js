import React, { Component } from 'react';
import '../assets/css/Facebook.css';
import profiles from '../data/berlin.json';

class Facebook extends Component {
  state = {
    profiles: [...profiles],
    country: '',
  };

  onClickHandler = (country) => {
    this.state.country === country
      ? this.setState({ country: '' })
      : this.setState({ country });
  };

  render() {
    const allCountries = profiles.map((profile) => profile.country);

    const uniqueCountries = new Set(allCountries);

    const displayedCountries = ['All', ...uniqueCountries].map((country) => {
      const divStyle = {
        border: '1px solid black',
        backgroundColor:
          this.state.country === country || this.state.country === 'All'
            ? 'LightSkyBlue'
            : 'white',
        width: 'auto',
        height: '50px',
        textAlign: 'center',
      };
      return (
        <div
          className="country-element"
          style={divStyle}
          key={country}
          onClick={() => this.onClickHandler(country)}
        >
          {country}
        </div>
      );
    });

    return (
      <div className="Facebook">
        <div className="CitiesList">{displayedCountries}</div>
        <div className="ProfilesList">
          {this.state.profiles.map(
            ({ img, firstName, lastName, country, isStudent }) => {
              const divStyle = {
                border: '2px solid black',
                backgroundColor:
                  this.state.country === country || this.state.country === 'All'
                    ? 'LightSkyBlue'
                    : 'white',
              };
              return (
                <div
                  className="profile-element"
                  style={divStyle}
                  key={firstName + lastName}
                >
                  <div className="profile-picture">
                    <img src={img} alt={lastName + firstName}></img>
                  </div>
                  <div className="profile-info">
                    <p>
                      <strong>First name:</strong> {firstName}
                    </p>
                    <p>
                      <strong>Last name:</strong> {lastName}
                    </p>
                    <p>
                      <strong>Country:</strong> {country}
                    </p>
                    <p>
                      <strong>Type:</strong> {isStudent ? 'Student' : 'Teacher'}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    );
  }
}

export default Facebook;
