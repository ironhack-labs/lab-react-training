import React, { Component } from 'react';
import profiles from '../data/berlin.json';

class Facebook extends Component {
  state = {
    profiles: [...profiles],
    country: '',
  };

  onClickHandler = (country) => {
    this.setState({ country });
  };

  render() {
    const allCountries = profiles.map((profile) => profile.country);

    const uniqueCountries = new Set(allCountries);

    const displayedCountries = ['All', ...uniqueCountries].map((country) => {
      const divStyle = {
        border: '1px solid black',
        backgroundColor: this.state.country === country ? 'cyan' : 'white',
        width: 'auto',
        height: '50px',
        display: 'inline-block',
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

    const imgPath = this.state.toggle ? this.props.imgClicked : this.props.img;

    return (
      <div className="Facebook">
        <div className="CitiesList">{displayedCountries}</div>
        <div className="CitiesList">{displayedCountries}</div>
      </div>
    );
  }
}

export default Facebook;
