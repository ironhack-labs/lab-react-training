import React, { Component } from "react";
import IdCard from "../id-card-component/IdCard";

export default class FaceBook extends Component {
  state = {
    countryFilter: ""
  };

  setCountryfilter = e => {
    this.setState({
      countryFilter: e.target.innerHTML
    });
  };

  render() {
    let countryList = Array.from(
      new Set(this.props.data.map(profile => profile.country))
    );

    return (
      <div>
        <div>
          {countryList.map((country, i) => {
            return (
              <button onClick={e => this.setCountryfilter(e)} key={i}>
                {country}
              </button>
            );
          })}
        </div>
        <div>
          {this.props.data.map((profile, i) => {
            return (
              <IdCard
                key={i}
                picture={profile.img}
                firstName={profile.firstName}
                lastName={profile.lastName}
                country={profile.country}
                type={profile.isStudent}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
