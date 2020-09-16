import React, { Component } from 'react';
import profiles from '../data/berlin.json'

class FaceBook extends Component {
  
  constructor(props) {
    super(props)
   
    this.countries = [...new Set(profiles.map(profile => profile.country))]
    this.state = {
      selected: null
    }
  }

  handleButtonClick(country) {
    this.setState(prevState => ({
      selected: country
    }))
  }
  render() {
    return (
      <div>
       
        {this.countries.map(country => (
          <button 
            key={country}
            style={{
              backgroundColor: this.state.selected === country ? 'blue' : 'white'
            }}
            onClick={() => this.handleButtonClick(country)} >
            {country}
          </button>
        ))}
        {profiles.map((profile,i) => (
          <div 
            key={i}
            style={{
              backgroundColor: profile.country === this.state.selected ? 'blue' : 'white'
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
