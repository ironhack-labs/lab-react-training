import React from 'react';
import './Facebook.css';
import profiles from '../../data/berlin.json';

export default class FaceBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.repeatedCountries = profiles.map((profile) => profile.country);
    this.countries = this.repeatedCountries.filter(
      (country, i) => this.repeatedCountries.indexOf(country) === i
    );
  }

  handleClick(e) {
    this.setState({
      country: e.target.innerText,
    });
  }

  render() {
    const countriesList = this.countries.map((country, key) => (
      <button key={key} onClick={(e) => this.handleClick(e)}>
        {country}
      </button>
    ));

    const cardsList = profiles.map((profile, key) => (
      <div
        onClick={(e) => this.handleClick(e)}
        className={`Card ${
          this.state.country === profile.country ? 'card-blue' : 'card-white'
        }`}
        country={profile.country}
        key={key}
      >
        <div className="UserImage">
          <img className="Image" src={profile.img} />
        </div>
        <div className="UserInfo">
          <div className="userinfo-container">
            <span className="label">First Name: </span>
            <span className="data">{profile.firstName}</span>
          </div>
          <div className="userinfo-container">
            <span className="label">Last Name: </span>
            <span className="data">{profile.lastName}</span>
          </div>
          <div className="userinfo-container">
            <span className="label">Country: </span>
            <span className="data">{profile.country}</span>
          </div>
          <div className="userinfo-container">
            <span className="label">Type: </span>
            <span className="data">
              {profile.isStudent ? 'Student' : 'Teacher'}
            </span>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <div>{countriesList}</div>
        <br />
        <div>{cardsList}</div>
      </div>
    );
  }
}
