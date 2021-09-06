import React from 'react';
import profiles from '../../data/berlin.json';
import './Facebook.css';

class Facebook extends React.Component {
  state = {
    activeCountry: '',
    sortBy: 'firstName',
    search: '',
  };

  getCountries = () => {
    return profiles
      .map((student) => student.country)
      .filter(
        (country, i, countriesArr) => countriesArr.indexOf(country) === i
      );
  };

  onClickCountry = (event) => {
    this.setState({ activeCountry: event.target.value });
  };

  onClickSortBy = (event) => {
    this.setState({ sortBy: event.target.value });
  };

  getSortedProfiles = (filteredProfiles) => {
    const { sortBy } = this.state;
    if (sortBy) {
      return filteredProfiles.sort((a, b) =>
        a[sortBy].localeCompare(b[sortBy])
      );
    }
    return filteredProfiles;
  };

  onChangeSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  filterSearch = () => {
    const { search } = this.state;

    if (search) {
      return profiles.filter((student) =>
        student.firstName.toLowerCase().includes(search.toLowerCase())
      );
    }
    return profiles;
  };

  render() {
    const { activeCountry, sortBy, search } = this.state;

    return (
      <div className="Facebook">
        <div>
          <button
            className={activeCountry === '' ? 'active' : ''}
            onClick={this.onClickCountry}
            value=""
          >
            All
          </button>
          {this.getCountries().map((country) => (
            <button
              className={activeCountry === country ? 'active' : ''}
              onClick={this.onClickCountry}
              value={country}
            >
              {country}
            </button>
          ))}
        </div>
        <div>
          <button
            className={sortBy === 'firstName' ? 'active' : ''}
            value="firstName"
            onClick={this.onClickSortBy}
          >
            Sort by first name
          </button>
          <button
            className={sortBy === 'lastName' ? 'active' : ''}
            value="lastName"
            onClick={this.onClickSortBy}
          >
            Sort by last name
          </button>
          <button
            className={sortBy === 'country' ? 'active' : ''}
            value="country"
            onClick={this.onClickSortBy}
          >
            Sort by country
          </button>
        </div>

        <input type="text" value={search} onChange={this.onChangeSearch} />

        {this.getSortedProfiles(this.filterSearch()).map((student) => (
          <InfoCard
            key={student.firstName}
            {...student}
            activeCountry={activeCountry}
          />
        ))}
      </div>
    );
  }
}


class InfoCard extends React.Component {
  state = {
    showInfo: true,
  };

  toggleInfo = () => {
    this.setState((prevState) => ({ showInfo: !prevState.showInfo }));
  };

  render() {
    const { firstName, lastName, country, img, isStudent, activeCountry } =
      this.props;

    return (
      <div
        className="InfoCard"
        style={{
          backgroundColor: country === activeCountry ? '#a3d2e2' : '#fff',
        }}
      >
        <img onClick={this.toggleInfo} src={img} alt={firstName} />
        {this.state.showInfo && (
          <div className="InfoCard-data">
            <p>
              <strong>First name:</strong> {firstName}
            </p>
            <p>
              <strong>Last name:</strong> {lastName}
            </p>
            <p>
              <strong>Country:</strong> {country}
            </p>
            <p>
              <strong>Type:</strong> {isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Facebook;

