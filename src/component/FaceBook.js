import React from 'react';
import profiles from '../data/berlin.json';

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
      className={this.chosenCountry === country ? 'butactive' : 'butnormal'}
    >
      {country}
    </button>
  );

  constructor(props) {
    super(props);
    this.countries = ['ALL', ...new Set(profiles.map((item) => item.country))];
    this.chosenCountry = 'ALL';
    this.state = {
      list: profiles.map(this.createList),
      buttons: this.countries.map(this.createButton),
    };
  }

  clickHandler = (passedCountry) => {
    this.chosenCountry = passedCountry;
    if (this.chosenCountry !== 'ALL') {
      this.setState((state, props) => ({
        list: profiles
          .filter((profile) => profile.country === this.chosenCountry)
          .map(this.createList),
        buttons: this.countries.map(this.createButton),
      }));
    } else {
      this.setState((state, props) => ({
        list: profiles.map(this.createList),
        buttons: this.countries.map(this.createButton),
      }));
    }
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
