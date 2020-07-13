import React, { Component } from 'react';
import data from '../data/berlin.json';
import './IdCard.css';

class FaceBook extends Component {
  constructor(props) {
    super(props);
    this.uniqueCountries = [...new Set(data.map((person) => person.country))];
    this.profiles = {
      profileData: data,
    };
    this.state = { countrySelected: undefined };
  }

  handleCountrySelected = (country) => {
    this.setState({
      countrySelected: country,
    });
  };

  render() {
    const profileList = this.profiles.profileData.map((person) => (
      <div
        className="id-card"
        key={person.lastName}
        style={{
          backgroundColor:
            this.state.countrySelected === person.country
              ? 'powderblue'
              : 'white',
        }}
      >
        <div className="card-img">
          <img src={person.img} alt="profile" />
        </div>
        <div className="card-data">
          <ul>
            <li>
              <b>First Name: </b> {person.firstName}
            </li>
            <li>
              <b>Last Name: </b> {person.lastName}
            </li>
            <li>
              <b>Country: </b> {person.country}
            </li>
            <li>
              <b>Type: </b> {person.isStudent ? 'Student' : 'Teacher'}
            </li>
          </ul>
        </div>
      </div>
    ));

    const countriesButtons = this.uniqueCountries.map((country) => (
      <button
        className="country-button"
        key={country}
        onClick={() => this.handleCountrySelected(country)}
        style={{
          backgroundColor:
            this.state.countrySelected === country ? 'powderblue' : 'white',
        }}
      >
        {country}
      </button>
    ));

    return (
      <section>
        <div>{countriesButtons}</div>
        {profileList}
      </section>
    );
  }
}

export default FaceBook;
