import React from 'react';
import profiles from './data/berlin.json';

class FaceBook extends React.Component {
  state= {
    filteredProfiles: profiles
  }

  selectCountry = (country) => {
    if (country === 'All') {
      return this.setState({filteredProfiles: profiles})
    }

    const filteredProfiles = profiles.filter(profile => profile.country === country);

    this.setState({filteredProfiles})
  }

  render() {
    const {filteredProfiles} = this.state;
    const countries = [...new Set(profiles.map(profile => profile.country))];

    return (
      <div>
        <div>
          <button onClick={() => this.selectCountry('All')}>
            All
          </button>
          {countries.map((country) => (
            <button key={country} onClick={() => this.selectCountry(country)}>
              {country}
            </button>
          ))}
        </div>
        {filteredProfiles.map((profile, idx) => (
          <div key={idx}>
            <img width={150} src={profile.img}/>
            <span>First Name: {profile.firstName}</span>
            <span>Last Name: {profile.lastName}</span>
            <span>Country: {profile.country}</span>
            <span>Type: {profile.isStudent ? 'Student' : 'Teacher'}</span>
          </div>
        ))}
      </div>
    )
  }
}

export default FaceBook;