import React from 'react';
import profiles from '../data/berlin.json';
class FaceBook extends React.Component {
  // this is THE solution. Making the state as small as possible
  state = {
    country: 'All',
  };
  clickHandler = (e) => {
    this.setState({ country: e.currentTarget.innerHTML });
  };
  render() {
    // Helper
    const allCountries = profiles.map((profile) => profile.country);
    const uniqueCountries = allCountries.filter(
      (country, idx) => allCountries.indexOf(country) === idx
    );
    const classFix = 'IdCard box ';
    // HTML elements
    const uniqueCountryButtons = uniqueCountries.map((country, idx) => (
      <button
        onClick={this.clickHandler}
        key={'country_' + idx}
        className={this.state.country === country ? 'butactive' : 'butnormal'}
      >
        {country}
      </button>
    ));
    const selectedProfiles =
      this.state.country === 'All'
        ? profiles
        : profiles.filter((profile) => profile.country === this.state.country);
    const profileElements = selectedProfiles.map((profile, idx) => {
      const classtext = classFix + (idx % 2 ? 'boxblue' : '');
      return (
        <div className={classtext} key={'profile_' + idx}>
          <img src={profile.img} alt={profile.lastName} />
          <div className="right">
            <strong>First name</strong>: {profile.firstName} <br />
            <strong>Last name</strong>: {profile.lastName} <br />
            <strong>Country</strong>: {profile.country} <br />
            <strong>Type</strong>: {profile.isStudent ? 'Student' : 'Teacher'}{' '}
            <br />
          </div>
        </div>
      );
    });
    return (
      <div className="faceBookAdvanced">
        <div className="faceBookButtons">
          <button onClick={this.clickHandler}>All</button>
          {uniqueCountryButtons}
        </div>
        <div className="faceBook">{profileElements}</div>
      </div>
    );
  }
}
export default FaceBook;
