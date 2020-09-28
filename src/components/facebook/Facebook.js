import React, { Component } from 'react';
import './Facebook.css';
import profiles from '../../data/berlin.json';
export default class FaceBook extends Component {
  state = {
    profiles,
    buttonColor: '',
    isActive: false,
    activeCountry: [],
    country: '',
  };

  handleOnClick = (event) => {
    this.filterCountry();
    let btnColor;
    this.state.isActive ? (btnColor = '') : (btnColor = 'blue');
    this.setState(
      {
        country: event.target.innerHTML,
        buttonColor: btnColor,
        isActive: !this.state.isActive,
        activeCountry: btnColor,
      },
      () =>
        console.log(
          this.state.buttonColor,
          this.state.isActive,
          this.state.country,
          this.state.activeCountry
        )
    );
  };

  //this is not yet working.
  filterCountry = () => {
    let filteredCountry = [];
    for (let i = 0; i < 28; i++) {
      if (this.state.country === this.state.profiles.country) {
        filteredCountry.push(this.state.profiles);
      }
    }
    console.log(filteredCountry);
  };

  render() {
    return (
      <div className="facebook-container">
        <h1>Facebook</h1>
        <button
          onClick={this.handleOnClick}
          style={{
            backgroundColor: `${this.state.buttonColor}`,
          }}
        >
          USA
        </button>
        <button onClick={this.handleOnClick}>England</button>
        <button onClick={this.handleOnClick}>Malaysia</button>
        <button>Germany</button>
        <button>Sweden</button>
        <button>Nigeria</button>
        <button>Italy</button>
        <button>Scotland</button>
        <button>Kazakhstan</button>
        <button>Russia</button>
        <button>Catalonia</button>
        <button>France</button>
        <button>Israel</button>
        <button>Brazil</button>
        <button>Taiwan</button>
        <button>Turkey</button>
        <button>Norway</button>

        <div>
          {this.state.profiles.map((element, index) => (
            <div
              style={{
                backgroundColor: `${this.state.buttonColor}`,
              }}
              key={index}
              className="profile-container"
            >
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
