import React from 'react';
import profiles from '../data/berlin.json';

class FaceBook extends React.Component {
  state = {
    profiles: profiles,
    selectedCountry: null,
  };

  handleCountrySelect = (country) => {
    this.setState({
      selectedCountry: country,
    });
  };

  render() {
    const selectedCountry = this.state.selectedCountry;

    const countries = [];

    for (let profile of this.state.profiles) {
      const country = profile.country;
      if (!countries.includes(country)) {
        countries.push(country);
      }
    }

    // const countries = this.state.profiles.reduce(
    //   (uniqueCountries, { country }) =>
    //     uniqueCountries.includes(country)
    //       ? uniqueCountries
    //       : [...uniqueCountries, country],
    //   []
    // );

    return (
      <div>
        <button
          className={'facebook-btn ' + (!selectedCountry ? 'highlighted' : '')}
          onClick={() => this.handleCountrySelect(null)}
        >
          All
        </button>
        {countries.map((country) => (
          <button
            key={country}
            className={
              'facebook-btn ' +
              (selectedCountry === country ? 'highlighted' : '')
            }
            onClick={() => this.handleCountrySelect(country)}
          >
            {country}
          </button>
        ))}
        {this.state.profiles.map((profile) => (
          <div
            key={profile.img}
            className={
              'profile ' +
              (!selectedCountry || selectedCountry === profile.country
                ? 'highlighted'
                : '')
            }
          >
            <img
              src={profile.img}
              alt={profile.firstName + ' ' + profile.lastName}
              className="profile__image"
            />
            <div className="profile__details">
              <strong>First Name:</strong> {profile.firstName}
              <br />
              <strong>Last Name:</strong> {profile.lastName}
              <br />
              <strong>Country:</strong> {profile.country}
              <br />
              <strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default FaceBook;
