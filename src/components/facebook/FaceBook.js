import React from 'react';
import profiles from '../../data/berlin.json';
import './FaceBook.css';

export default class FaceBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      profilesList: profiles,
    };
  }

  getCountriesList() {
    let countries = [];
    this.state.profilesList.forEach((profile) => {
      if (!countries.includes(profile.country)) countries.push(profile.country);
    });
    countries.sort((a, b) => a.localeCompare(b));
    return countries;
  }

  filterByCountry(country) {
    let newProfileList = this.state.profilesList.filter(
      (profile) => profile.country === country
    );
    if (country == 'All') newProfileList = profiles;
    this.setState({ profilesList: newProfileList });
  }

  render() {
    return (
      <div id="facebook-container">
        <input placeholder="Search by name..." id="search-bar"></input>
        <div id="filter-btns-container">
          <button
            key="btn-all"
            className="country-btn"
            onClick={() => this.filterByCountry('All')}
          >
            All
          </button>
          {this.getCountriesList().map((country) => {
            return (
              <button
                key={`btn-${country}`}
                className="country-btn"
                onClick={() => this.filterByCountry(country)}
              >
                {country}
              </button>
            );
          })}
        </div>

        {this.state.profilesList.map(
          ({ firstName, lastName, country, img, isStudent }, index) => {
            return (
              <article key={index} className="facebook-card">
                <img className="card-picture" src={img} alt=""></img>
                <div className="facebook-details-card">
                  <p>
                    <strong>First name:</strong>
                    {firstName}
                  </p>
                  <p>
                    <strong>Last name:</strong>
                    {lastName}
                  </p>
                  <p>
                    <strong>Country:</strong>
                    {country}
                  </p>
                  <p>
                    <strong>Type:</strong>
                    {isStudent ? 'Student' : 'Teacher'}
                  </p>
                </div>
              </article>
            );
          }
        )}
      </div>
    );
  }
}
