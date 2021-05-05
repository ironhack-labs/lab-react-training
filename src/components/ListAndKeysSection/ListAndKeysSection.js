import React from 'react';
import ProfileCard from './ProfileCard';
import profiles from '../../data/berlin.json';
import './ListAndKeySection.css';
import CountryButton from './CountryButton';

const countries = {};
const countriesList = Array.from(
  new Set(
    profiles.map((profile) => {
      countries[profile.country] = false;
      return profile.country;
    }),
  ),
);

export default class ListAndKeysSection extends React.Component {
  state = {
    all: true,
    countries: countries,
    countriesList: countriesList,
    profiles: profiles,
    ascendentFirst: true,
    ascendentLast: false,
  };

  renderProfileCards = () => {
    const profiles = [...this.state.profiles];
    const countries = { ...this.state.countries };
    const { all } = this.state;

    return profiles
      .filter((prof) => (all ? prof : countries[prof.country]))
      .map((prof, i) => {
        return (
          <ProfileCard
            key={prof.img}
            active={countries[prof.country]}
            {...prof}
          />
        );
      });
  };

  renderCountryButtons = () => {
    return countriesList.map((country) => {
      return (
        <CountryButton
          key={country}
          clickHandler={this.toggleActive}
          active={this.state.countries[country]}
          country={country}
        />
      );
    });
  };

  toggleActive = (e) => {
    const countries = { ...this.state.countries };
    countries[e.target.innerText] = !countries[e.target.innerText];

    this.setState({
      countries: countries,
    });
  };

  orderByFirstName = () => {
    const ascendent = !this.state.ascendentFirst;
    const profiles = [...this.state.profiles];

    profiles.sort((a, b) => {
      if (a.firstName > b.firstName) return ascendent ? 1 : -1;
      else return ascendent ? -1 : 1;
    });

    this.setState({
      profiles: profiles,
      ascendentFirst: ascendent,
    });
  };

  orderByLastName = () => {
    const ascendent = !this.state.ascendentLast;
    const profiles = [...this.state.profiles];

    profiles.sort((a, b) => {
      if (a.lastName > b.lastName) return ascendent ? 1 : -1;
      else return ascendent ? -1 : 1;
    });

    this.setState({
      profiles: profiles,
      ascendentLast: ascendent,
    });
  };

  allHandler = () => {
    this.setState((state) => ({ all: !state.all }));
  };

  render = () => {
    return (
      <div className="profile-list">
        <h1>List and Keys</h1>

        <div className="country-buttons">
          <button
            className="country-btn"
            onClick={this.allHandler}
            style={{ backgroundColor: this.state.all ? 'lightblue' : 'white' }}
          >
            All
          </button>
          {this.renderCountryButtons()}
        </div>
        <button onClick={this.orderByFirstName} className="sort-button">
          Order by: First Name
          {this.state.ascendentFirst ? ' ⬆️' : ' ⬇️'}
        </button>
        <button onClick={this.orderByLastName} className="sort-button">
          Order by: Last Name
          {this.state.ascendentLast ? ' ⬆️' : ' ⬇️'}
        </button>
        {this.renderProfileCards()}
      </div>
    );
  };
}
