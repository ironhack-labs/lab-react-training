import React from 'react';
import profiles from '../../data/berlin.json';
import './Facebook.css';

export default class Facebook extends React.Component {
  state = {
    profiles: profiles,
    country: '',
    image: '',
    inputValue: '',
    sortBy: 'a-z',
  };

  onClickButton = (event) => {
    const { value } = event.target;
    this.setState({ country: value });
  };

  onClickImage = (value) => {
    this.setState({ image: value });
  };

  onClickSortA = () => {
    this.setState({ sortBy: 'a-z' });
  };

  onClickSortZ = () => {
    this.setState({ sortBy: 'z-a' });
  };

  render() {
    const getButtons = (profiles) => {
      const countries = ['All'];
      profiles.forEach((profile) => {
        if (!countries.includes(profile.country)) {
          countries.push(profile.country);
        }
      });
      return countries;
    };
    const buttons = getButtons(this.state.profiles);

    const getProfiles = () => {
      let facebookProfiles = [...this.state.profiles];
      let finalFacebookProfiles = [];
      if (this.state.sortBy === 'a-z') {
        finalFacebookProfiles = facebookProfiles.sort((a, b) => {
          let firstEl = a.firstName;
          let secondEl = b.firstName;
          return firstEl.localeCompare(secondEl);
        });
      } else if (this.state.sortBy === 'z-a') {
        finalFacebookProfiles = facebookProfiles.sort((a, b) => {
          let firstEl = a.firstName;
          let secondEl = b.firstName;
          return secondEl.localeCompare(firstEl);
        });
      }

      if (this.state.inputValue.length > 0) {
        finalFacebookProfiles = finalFacebookProfiles.filter((profile) => {
          const profilesFiltered = profile.firstName;
          return profilesFiltered.indexOf(this.state.inputValue) >= 0;
        });
        return finalFacebookProfiles;
      }
      return finalFacebookProfiles;
    };

    const facebookProfiles = getProfiles();

    const updateInputValue = (event) => {
      this.setState({
        inputValue: event.target.value,
      });
    };

    return (
      <div className="Facebook">
        <div className="Facebook-sortButtons">
          <input
            value={this.state.inputValue}
            onChange={updateInputValue}
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button
            onClick={this.onClickSortA}
            type="button"
            className="btn btn-outline-primary"
          >
            Sort A-Z
          </button>
          <button
            onClick={this.onClickSortZ}
            type="button"
            className="btn btn-outline-primary"
          >
            Sort Z-A
          </button>
        </div>
        <div className="Facebook-buttons">
          {buttons.map((button) => {
            return (
              <button
                key={button}
                value={button}
                onClick={this.onClickButton}
                type="button"
                className="btn btn-outline-primary"
                style={{
                  backgroundColor:
                    this.state.country === button ? '#34a5ef' : '',
                  color: this.state.country === button ? 'white' : '',
                }}
              >
                {button}
              </button>
            );
          })}
        </div>

        {facebookProfiles.map((profile) => {
          return (
            <div
              className="Facebook-profile"
              key={profile.firstName}
              style={{
                backgroundColor:
                  this.state.country === profile.country ||
                  this.state.country === 'All'
                    ? '#34a5ef'
                    : '',
              }}
            >
              <div className="Facebook-img">
                <img
                  onClick={() => this.onClickImage(profile.img)}
                  type="button"
                  src={profile.img}
                  alt={profile.firstName}
                />
              </div>

              {this.state.image === profile.img ? (
                <div className="Facebook-data">
                  <h1>
                    <u>First Name:</u> <span> {profile.firstName}</span>
                  </h1>
                  <h1>
                    <u>Last Name:</u> <span> {profile.lastName}</span>
                  </h1>
                  <h1>
                    <u>First Country:</u> <span> {profile.country}</span>
                  </h1>
                  <h1>
                    <u>Type:</u>{' '}
                    <span>
                      {profile.isStudent === true ? 'Student' : 'Teacher'}
                    </span>
                  </h1>
                </div>
              ) : (
                <div className="Facebook-p">
                  <p>Click on the image to see the information</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
