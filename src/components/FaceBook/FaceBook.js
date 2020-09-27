import React, { Component } from 'react';
import profiles from '../../data/berlin.json';
import './FaceBook.css';

class FaceBook extends Component {
  profilesJSX = [];
  countriesBtns = [];

  state = {
    profileList: profiles.map((ele, idx) => ({
      ...ele,
      id: idx,
      isExpand: false,
    })),
    selectCountry: '',
    expandProfile: false,
    sortProfile: false,
    srchWord: '',
  };

  /** */
  createCounrtyButtons = () => {
    let countries = profiles
      .map((ele) => ele.country)
      .filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
      });

    countries.push('All');

    // condition check as render() is called twice
    if (this.countriesBtns.length < countries.length) {
      countries.forEach((country) => {
        this.countriesBtns.push(
          <button
            className="btn-country"
            onClick={() => this.highLightCountry(country)}
          >
            {country}
          </button>
        );
      });
    }
  };

  /** */
  highLightCountry = (country) => {
    this.setState({ selectCountry: country });
  };

  /** */
  toggleProfile = (id) => {
    console.log(' toggle expand clicked ...', id);
    let tempList = this.state.profileList;
    tempList = tempList.map((ele) => {
      if (ele.id === id) ele.isExpand = !ele.isExpand;
      return ele;
    });

    this.setState({ profileList: tempList });
  };

  /** search profiles */
  searchProfiles = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  /** */
  sortProfiles = () => {
    console.log(' sort profiles  clicked ...');
    this.setState({ sortProfile: !this.state.sortProfile }, () => {
      let sortedList = this.state.profileList;
      sortedList = this.state.sortProfile
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

  /** */
  formProfile = () => {
    this.profilesJSX = [];
    this.createCounrtyButtons();
    let { expandProfile } = this.state;

    let tempList = this.state.profileList;
    tempList = tempList.filter((ele) =>
      ele.firstName.includes(this.state.srchWord.toLocaleLowerCase().trim())
    );
    console.log(' formProfile: ', tempList);

    tempList.forEach((profile) => {
      let eachHtml = (
        <div
          className={
            profile.country === this.state.selectCountry ||
            this.state.selectCountry === 'All'
              ? 'fb-profile fb-profile-bg-color'
              : 'fb-profile  fb-profile-bg-none '
          }
        >
          <img
            src={profile.img}
            onClick={() => this.toggleProfile(profile.id)}
          />

          {profile.isExpand && (
            <div className="fb-profile-content">
              <p>
                <span> First name: </span> {profile.firstName}
              </p>
              <p>
                <span> Last name: </span> {profile.lastName}
              </p>
              <p>
                <span> Country: </span> {profile.country}
              </p>
              <p>
                <span> Type: </span> {profile.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          )}
        </div>
      );
      if (this.profilesJSX.length < profiles.length) {
        this.profilesJSX.push(eachHtml);
      }
    });
  };

  /** */
  render() {
    console.log(' render called --- ');
    // console.log(this.state.profileList);

    this.formProfile();
    return (
      <div className="fb-sec">
        <div className="fb-ctry-btn-sec"> {this.countriesBtns} </div>
        <div className="action-btn-sec">
          <button className="sort-btn" onClick={this.sortProfiles}>
            SORT
          </button>
          <input
            type="text"
            name="srchWord"
            value={this.state.srchWord}
            onChange={this.searchProfiles}
          />
        </div>
        <div className="fb-profiles-sec"> {this.profilesJSX} </div>
      </div>
    );
  }
}

export default FaceBook;
