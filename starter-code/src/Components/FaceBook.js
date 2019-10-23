import React from 'react';
import profiles from '../data/berlin.json'

class FaceBook extends React.Component {
  state = {
    country: 'All'
  }

  clickHandler = (e) => {
    this.setState({ country: e.currentTarget.innerHTML })
  }

  render() {
    // Helper 
    const allCountries = profiles.map(profile => profile.country)
    const uniqueCountries = allCountries.filter((country, idx) => allCountries.indexOf(country) === idx)

    // HTML elements
    const uniqueCountryButtons = uniqueCountries.map((country, idx) => <button onClick={this.clickHandler} key={'country_' + idx} className={this.state.country === country ? 'blue' : 'white'}>{country}</button>)

    const profileElements = profiles.map((profile, idx) => {
      return (
        <div id="FaceBookProfile" className={this.state.country === profile.country ? 'blue' : 'white'} key={'profile_' + idx}>
          <img src={profile.img} alt="idPicture" />
          <div className="id-content">
            <p><span className="strong">First name: </span>{profile.firstName}</p>
            <p><span className="strong">Last name: </span>{profile.lastName} </p>
            <p><span className="strong">Country: </span>{profile.country} </p>
            <p><span className="strong">Type: </span>{profile.isStudent ? "Student" : "Teacher"}</p>
          </div>
        </div>
      )
    })

    return (
      <div className="FaceBook">
        <div className="countryButtons">
          <button onClick={this.clickHandler}>All</button>
          {uniqueCountryButtons}
        </div>

        {profileElements}

      </div>
    )
  }
}

export default FaceBook;