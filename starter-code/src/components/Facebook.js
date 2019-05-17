import React, { Component } from 'react';

import Idcard from './IdCard.js';

import './Facebook.css'

class Facebook extends Component {
  state = {
    countryFilter: ''
  }

  setCountryFilter = (e) => {
    this.setState({
      countryFilter: e.target.innerHTML
    })
  }

  render() {
    let countryList = Array.from(new Set(this.props.data.map(profile => profile.country)))

    return (
      <div>
        <div>
          {countryList.map(country => {
            return (
              <div
                className="facebook-country-filter"
                key={country}
                onClick={(e) => this.setCountryFilter(e)} >{country}
              </div>)
          })}
        </div>
        <div>
          {this.props.data.map((profile, index) => {
            return (
              <Idcard
                key={index}
                lastName={profile.lastName}
                firstName={profile.firstName}
                picture={profile.img}
                country={profile.country}
              />)
          })}
        </div>
      </div>
    );
  }
}

export default Facebook;