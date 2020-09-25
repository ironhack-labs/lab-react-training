import React from 'react';
import './Facebook.css';
import profiles from '../../data/berlin.json';

export default class FaceBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.cardsList = this.cardsList;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const selectedCountry = e.target.innerText;

    console.log('selected Button', selectedCountry);

    this.cardsList.forEach((card) => {
      if (card.props.pais === selectedCountry) {
        this.setState((state) => ({
          isToggleOn: !state.isToggleOn,
        }));
      }
    });
  }

  getBgColor() {
    return this.state.isToggleOn ? '#66D3FA' : 'white';
  }

  render() {
    let repeatedCountries = [];
    profiles.forEach((profile) => {
      repeatedCountries.push(profile.country);
    });

    let countries = repeatedCountries.filter(
      (country, i) => repeatedCountries.indexOf(country) === i
    );

    const countriesList = countries.map((country, key) => (
      <button key={key} onClick={(e) => this.handleClick(e)}>
        {country}
      </button>
    ));

    this.cardsList = profiles.map((profile, key) => (
      <div
        className="Card"
        pais={profile.country}
        key={key}
        style={{
          backgroundColor: this.getBgColor(),
        }}
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
        <div>{this.cardsList}</div>
      </div>
    );
  }
}
