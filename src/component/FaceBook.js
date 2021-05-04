import React from 'react';
import profiles from '../data/berlin.json';
const countries = ['ALL', ...new Set(profiles.map((item) => item.country))];
let chosenCountry = 'ALL';

class App extends React.Component {
  createList = (profile, i) => {
    const classFix = 'IdCard box ';
    const classtext = classFix + (i % 2 ? 'boxblue' : '');

    return (
      <div className={classtext} key={'facebook' + i}>
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
  };
  createButton = (country, i) => (
    <button
      onClick={() => this.clickHandler(country)}
      key={'faceclick' + i}
      className={chosenCountry === country ? 'butactive' : 'butnormal'}
    >
      {country}
    </button>
  );

  state = {
    list: profiles.map(this.createList),
    buttons: countries.map(this.createButton),
  };

  clickHandler = (passedCountry) => {
    chosenCountry = passedCountry;
    this.setState((state, props) => {
      if (chosenCountry !== 'ALL') {
        return {
          list: profiles
            .filter((profile) => profile.country === chosenCountry)
            .map(this.createList),
          buttons: countries.map(this.createButton),
        };
      } else {
        return {
          list: profiles.map(this.createList),
          buttons: countries.map(this.createButton),
        };
      }
    });
  };

  render() {
    return (
      <div className="faceBookAdvanced">
        <div className="faceBookButtons">{this.state.buttons}</div>
        <div className="faceBook">{this.state.list}</div>
      </div>
    );
  }
}

export default App;
