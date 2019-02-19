import React, { Component } from 'react';
import profiles from './data/berlin.json'

class FaceBook extends Component {
  // This is the advanced part
  constructor(props) {
    super(props)
    // Save the list of countries from profiles and only keep the unique values (Set)
    this.countries = [...new Set(profiles.map(profile => profile.country))]
    this.state = {
      selected: null
    }
  }
  // This is the advanced part
  handleButtonClick(country) {
    this.setState(prevState => ({
      selected: country
    }))
  }
  render() {
    return (
      <div className="FaceBook">
        {/* This map is the advanced part */}
        {this.countries.map(country => (
          <button 
            key={country}
            style={{
              backgroundColor: this.state.selected === country ? 'lightblue' : 'white'
            }}
            onClick={() => this.handleButtonClick(country)} >
            {country}
          </button>
        ))}
        {profiles.map((profile,i) => (
          <div 
            key={i}
            style={{
              backgroundColor: profile.country === this.state.selected ? 'lightblue' : 'white'
            }} 
            className="IdCard box">
            <img src={profile.img} alt="img"/>
            <div className="left">
              <strong>First Name</strong>: {profile.firstName} <br/>
              <strong>Last Name</strong>: {profile.lastName} <br/>
              <strong>Country</strong>: {profile.country} <br/>
              <strong>Type</strong>: {profile.isStudent ? "Student" : "Teacher"} <br/>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default FaceBook;
