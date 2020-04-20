// components/Facebook/Facebook.js

import React, { Component } from 'react';
import FacebookCard from './FacebookCard';
import CountryButton from './CountryButton';
import profiles from '../../data/berlin.json';

export default class Facebook extends Component {
  state = { selected: 'All' };

  getCountries = () => {
    const profileCountries = profiles.map(profile => profile.country);
    return [...new Set(profileCountries)];
  } 

  drawButtons = (countries) => {
    countries.unshift('All');
    return (
      <div>
        {countries.map((country, index) => {
          return (
            <CountryButton handleClick={this.handleClick} style={this.getStyle(country)} key={country + index}>
              {country}
            </CountryButton>
          )
        })}
      </div>
    )
  }

  drawProfiles = (countries) => {
    return (
      <div>
        {profiles.map((profile, index) => {
          const { firstName, lastName, country, isStudent, img } = profile;
          return <FacebookCard
            key={firstName + index}
            firstName={firstName}
            lastName={lastName}
            country={country}
            isStudent={isStudent}
            img={img}
            divStyle={this.getStyle(country)}
          />
        })}
      </div>
    )
  }

  handleClick = (country) => {
    this.setState({ selected: country });
  }

  getStyle(country) {
    const { selected } = this.state;
    return { backgroundColor: country === selected ? '#a3d2e2' : 'white' };
  }

  render() {
    const countries = this.getCountries();
    return (
      <div className='Facebook'>
        {this.drawButtons(countries)}
        {this.drawProfiles(countries)}
      </div>
    );
  }
}
