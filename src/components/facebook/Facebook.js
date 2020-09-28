import React, { Component } from 'react';
import './Facebook.css';
import profiles from '../../data/berlin.json';
export default class FaceBook extends Component {
  state = {
    profiles,
  };

  handleOnClick = (event) => {
    //prevents rerender of whole page
    event.preventDefault();
    const { firstName, lastName } = this.state;

    //create new array that copies this.state.profiles(json) and adds new object to the beginning of that newProfilesArray
    const newProfilesArray = [
      { firstName: firstName, lastName: lastName },
      ...this.state.profiles,
    ];
    //set state of profiles to newProfilesArray
    //clear form (setState back to "")
    this.setState({
      profiles: newProfilesArray,
      firstName: '',
      lastName: '',
    });
    console.log(this.state.profiles);
  };

  render() {
    return (
      <div className="facebook-container">
        <div>
          {this.state.profiles.map((element) => (
            <div className="profile-container">
              <div>
                <img id="idcard-img" src={element.img} alt="Head Shot" />
              </div>
              <div className="personal-info">
                <div type="string">
                  <b>First name: </b>
                  {element.firstName}
                </div>
                <div type="string">
                  <b>Last name: </b>
                  {element.lastName}
                </div>
                <div type="string">
                  <b>Country: </b>
                  {element.country}
                </div>
                <div type="string">
                  <b>Type: </b>
                  {element.isStudent ? `Student` : `Teacher`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
//   {/* PROFILES LIST */}
//   {this.state.profiles.map((element, index) => (
//     <FaceBook key={index} firstName={element.firstName} />
//   ))}
