import React from 'react';
import profiles from '../data/berlin.json';
const countries = [...new Set(profiles.map((item) => item.country))];

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
    <button onClick={() => this.clickHandler(country)} key={'faceclick' + i}>
      {country}
    </button>
  );

  state = {
    list: profiles.map(this.createList),
    buttons: countries.map(this.createButton),
  };

  clickHandler = (info) => {
    this.setState((state, props) => {
      if (typeof info === 'string') {
        return {
          list: profiles
            .filter((profile) => profile.country === info)
            .map(this.createList),
          buttons: countries.map((country, i) => (
            <button
              onClick={() => this.clickHandler(country)}
              key={'faceclick' + i}
              className={info === country ? 'butactive' : ''}
            >
              {country}
            </button>
          )),
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
        <div className="faceBookButtons">
          <button key="faceclickall" onClick={this.clickHandler}>
            ALL
          </button>
          {this.state.buttons}
        </div>
        <div className="faceBook">{this.state.list}</div>
      </div>
    );
  }
}

export default App;
