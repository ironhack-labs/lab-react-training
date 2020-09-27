import React, { Component } from 'react';
import profiles from '../data/berlin.json';

export default class Facebook extends Component {
  state = {
    profilesArr: profiles,
    selectedCountry: '',
    expandProfile: false,
    nameExpandedProfile: '',
    searchedName: '',
    sortProfiles: false,
  };

  selectCountry = (item) => {
    this.setState({ selectedCountry: item });
  };

  selectAll = () => {
    let countries = this.state.profilesArr.map((item) => item.country);
    let countriesList = [...new Set(countries)];
    this.setState({ selectedCountry: countriesList });
  };

  clickedExpandProfile = (name) => {
    this.setState({
      expandProfile: !this.state.expandProfile,
      nameExpandedProfile: name,
    });
  };

  sortProfiles = () => {
    this.setState({ sortProfiles: !this.state.sortProfiles }, () => {
      let sortedList = this.state.profilesArr;
      sortedList = this.state.sortProfiles
        ? sortedList.sort((a, b) => {
            return a.firstName.toLowerCase() < b.firstName.toLowerCase()
              ? -1
              : a.firstName.toLowerCase() > b.firstName.toLowerCase()
              ? 1
              : 0;
          })
        : sortedList.sort((b, a) => {
            return a.firstName.toLowerCase() < b.firstName.toLowerCase()
              ? -1
              : a.firstName.toLowerCase() > b.firstName.toLowerCase()
              ? 1
              : 0;
          });

      this.setState({ profileList: sortedList });
    });
  };

  searchProfiles = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const addButtons = () => {
      let countries = this.state.profilesArr.map((item) => item.country);
      let countriesList = [...new Set(countries)];
      return countriesList;
    };

    const profileList = this.state.profilesArr
    .filter((el) =>
      el.firstName
        .toLowerCase()
        .trim()
        .includes(this.state.searchedName.toLowerCase().trim() )
    );

    return (
      <div>
        <div>
          <button onClick={() => this.selectAll()} className="country">
            All
          </button>
          {addButtons().map((item, idx) => (
            <button
              key={idx}
              onClick={() => this.selectCountry(item)}
              className="country"
            >
              {item}
            </button>
          ))}
          <div>
            <button className="sort" onClick={this.sortProfiles}>
              Sort
            </button>
            <br />
            <label>Search by name: </label>
            <input
              type="text"
              name="searchedName"
              value={this.state.searchedName}
              onChange={this.searchProfiles}
              placeholder='Marco '
            />
          </div>
        </div>
        <div className="container">
          {this.state.profilesArr.map((profile, idx) => {
            return (
              <div>
                <div
                  key={idx}
                  className="profile-card"
                  style={{
                    backgroundColor: this.state.selectedCountry.includes(
                      profile.country
                    )
                      ? 'lightblue'
                      : 'transparent',
                  }}
                >
                  <img
                    style={{ width: '200px' }}
                    src={profile.img}
                    alt="profile-pic"
                    onClick={() => this.clickedExpandProfile(profile.firstName)}
                  />
                  {this.state.expandProfile &&
                    this.state.nameExpandedProfile.includes(
                      profile.firstName
                    ) && (
                      <div className="profile-details">
                        <p>
                          <strong>First name:</strong>{' '}
                          <span> {profile.firstName}</span>
                        </p>
                        <p>
                          <strong>Last name:</strong>{' '}
                          <span> {profile.lastName}</span>
                        </p>
                        <p>
                          <strong> Country: </strong>{' '}
                          <span> {profile.country}</span>
                        </p>
                        {profile.isStudent && (
                          <p>
                            <strong>Type:</strong> <span> Student</span>
                          </p>
                        )}
                        {!profile.isStudent && (
                          <p>
                            <strong> Type: </strong> <span>Teacher</span>
                          </p>
                        )}
                      </div>
                    )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
