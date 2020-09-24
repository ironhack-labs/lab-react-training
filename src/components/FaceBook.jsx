import React, { Component } from 'react';
import profiles from '../data/berlin.json';

class FaceBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.profileArray = profiles.map((profile) => {
      const type = profile.isStudent ? 'Student' : 'Teacher';
      const color = (this.state.country === profile.country) ? 'blue' : '';
      console.log(type)
      const profileCard = (
        <article style={{ backgroundColor: color }} className="idCard">
          <img src={profile.img}></img>
          <div>
            <p>
              <b>First Name:</b> {profile.firstName}
            </p>
            <p>
              <b>Last Name:</b> {profile.lastName}
            </p>
            <p>
              <b>Country:</b> {profile.country}
            </p>
            <p>
              <b>Type:</b> {type}
            </p>
          </div>
        </article>
      );

      return profileCard;
    });

    this.countries = profiles.map((profile) => profile.country);

    this.uniqueCountries = [...new Set(this.countries)];
    this.countryButtons = this.uniqueCountries.map((country) => {
      return (
        <button onClick={(e) => this.handleClick(e)} value={country}>
          {country}
        </button>
      );
    });
  }

  handleClick(event) {
    const country = event.target.value;
    this.setState({ country });
  }

  render() {
    return (
      <div>
        <div>{this.countryButtons}</div>
        <div>{profiles.map((profile) => {
      const type = profile.isStudent ? 'Student' : 'Teacher';
      const color = (this.state.country === profile.country) ? 'blue' : '';
      console.log(type)
      const profileCard = (
        <article style={{ backgroundColor: color }} className="idCard">
          <img src={profile.img}></img>
          <div>
            <p>
              <b>First Name:</b> {profile.firstName}
            </p>
            <p>
              <b>Last Name:</b> {profile.lastName}
            </p>
            <p>
              <b>Country:</b> {profile.country}
            </p>
            <p>
              <b>Type:</b> {type}
            </p>
          </div>
        </article>
      );

      return profileCard;
    })}</div>
      </div>
    );
  }
}

export default FaceBook;
