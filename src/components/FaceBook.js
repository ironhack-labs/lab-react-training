import React from 'react';
import profiles from '../data/berlin.json';

class FaceBook extends React.Component {
  state = {
    profiles: profiles,
    filteredProfiles: profiles,
    countries: ['All', ...new Set(profiles.map((profile) => profile.country))],
    activeCountry: '',
    activeProfiles:[],
  };

  handleClick = (country) => {
    if (country === 'All') {
      this.setState({
        activeCountry: '',
      });
    } else {
      this.setState({
        activeCountry: country,
      });
    }
  };

  handleSort = (sorting) => {
    let cloneProfiles = [...this.state.profiles];
    // cloneProfiles.sort((a, b) => a[sorting].localeCompare(b[sorting]))
    cloneProfiles.sort((a, b) => a[sorting] > b[sorting]? 1 : -1)
    this.setState({
      profiles: cloneProfiles,
      filteredProfiles: cloneProfiles,
    });
  };

  handleSearch = (event) => {
    let searchName = event.currentTarget.value.toLowerCase();
    let cloneProfiles = this.state.profiles.filter((item) => {
      return (
        item.firstName.toLowerCase().includes(searchName) ||
        item.lastName.toLowerCase().includes(searchName)
      );
    });
    this.setState({
      filteredProfiles: cloneProfiles,
    });
  };

  handleShowProfile = (profile) => {
      let cloneActiveProfiles = [...this.state.activeProfiles, profile]
      this.setState({
          activeProfiles: cloneActiveProfiles
      })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleSort('firstName')}>
          Sort by First Name
        </button>
        <button onClick={() => this.handleSort('lastName')}>
          Sort by Last Name
        </button>
        <button onClick={() => this.handleSort('country')}>
          Sort by Country
        </button>
        <input
          onChange={this.handleSearch}
          type="text"
          placeholder="Search for a Profile"
        />
        <div>
          {this.state.countries.map((country, i) => {
            return (
              <button
                onClick={() => this.handleClick(country)}
                key={'country' + i}
                className={
                  this.state.activeCountry === country ? 'isActive' : ''
                }
              >
                {country}
              </button>
            );
          })}
        </div>
        {this.state.filteredProfiles.map((profile, i) => {
          return (
            <div
              key={'profile' + i}
              className={
                this.state.activeCountry === profile.country
                  ? 'profile isActive'
                  : 'profile'
              }
            >
              <div className="picture">
                <img onClick={() => this.handleShowProfile(profile)} src={profile.img} alt={profile.firstName} />
              </div>
              <div className={
                  this.state.activeProfiles.some(oneProfile => oneProfile.firstName === profile.firstName && oneProfile.lastName === profile.lastName) ? 'infos' : 'infos isHidden'
              }>
                <p>
                  <strong>First Name:</strong> {profile.firstName}
                </p>
                <p>
                  <strong>Last Name:</strong> {profile.lastName}
                </p>
                <p>
                  <strong>Country:</strong> {profile.country}
                </p>
                <p>
                  <strong>Type:</strong>{' '}
                  {profile.isStudent ? 'Student' : 'Teacher'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FaceBook;
