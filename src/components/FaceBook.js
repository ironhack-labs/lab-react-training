import React, { Component } from 'react';
import profiles from '../data/berlin.json';



class Facebook extends Component {

  createCountryButtonList = () => {
    let countryButtonList = [];
      profiles.map(profileInfo => {
        return countryButtonList.push(profileInfo.country);
      })
      console.log(countryButtonList)
      const newCountryButtonList = [ ...new Set(profiles.map((profileInfo) => {
        return profileInfo.country
      }))]
      console.log(newCountryButtonList)
      return newCountryButtonList.map((countries) => <button>{countries}</button>)
  }

  render() {
    return (
      <div>
        {this.createCountryButtonList()}
        { profiles.map((profileInfo) => {
          return (
            <div className="facebook-profile-box">
              <div className="facebook-profile-image-box">
                <img className="facebook-profile-image" src={ profileInfo.img } alt={ profileInfo.firstName } />
              </div>
              
              <div className="facebook-profile-info-box">
                <p><strong>First name:</strong>  { profileInfo.firstName }</p>
                <p><strong>Last name:</strong>  { profileInfo.lastName }</p>
                <p><strong>Country:</strong>  { profileInfo.country }</p>
                <p><strong>Type:</strong>  { profileInfo.isStudent ? "Student" : "Teacher" }</p>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
};

export default Facebook;