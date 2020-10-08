import React, { Component } from 'react';
import profiles from '../data/berlin.json';

class Facebook extends Component {
  state = {
    countrySelected: '',
  };

  handleClick = (event, country) => {
    this.setState({
      countrySelected: country,
    });
    console.log(this.state);
  };

  render() {
    let allCountries = profiles.map((student) => student.country);
    let countries = [...new Set(allCountries)];

    return (
      <div>
        <div className="countries-btn">
          {countries.map((country) => (
            <button
              style={{
                backgroundColor:
                  this.state.countrySelected === country ? 'lightblue' : 'white',
              }}
              key={country}
              onClick={(event) => this.handleClick(event, country)}
            >
              {country}
            </button>
          ))}
        </div>

        {profiles.map((student, i) => (
          <div
            style={{
              backgroundColor:
                this.state.countrySelected === student.country
                  ? 'lightblue'
                  : 'white',
            }}
            className="profile"
            key={i}
          >
            <img src={student.img} alt="" />
            <div>
              <div>First name: {student.firstName}</div>
              <div>Last name:{student.lastName}</div>
              <div>Country:{student.country}</div>
              <div>Type: {student.isStudent ? 'Student' : 'Teacher'}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Facebook;
