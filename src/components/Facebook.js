// components/Facebook.js

import React, { Component } from 'react';
import FacebookCard from './FacebookCard';
import profiles from '../data/berlin.json';

export default class Facebook extends Component {
  state = { selected: 'All' };

  // refactor https://stackoverflow.com/questions/45041878/closures-in-react

  render() {
    const countries = this.getCountries();
    return (
      <div className='Facebook'>
        {this.drawButtons(countries)}
        {this.drawProfiles(countries)}
      </div>
    );
  }

  getCountries = () => {
    const profileCountries = profiles.map(profile => profile.country);
    return [...new Set(profileCountries)];
  } 

  drawButtons = (countries) => {
    return (
      <div>
        <button onClick={e => this.handleClick('All')} style={this.getStyle('All')}>All</button>
        {countries.map((country, index) => {
          return <button onClick={e => this.handleClick(country)} style={this.getStyle(country)} key={country + index}>{country}</button>
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
}
