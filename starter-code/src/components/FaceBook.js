import React, { Component } from "react";

import IdCard from "./IdCard";
import profiles from "../data/berlin.json";

class FaceBook extends Component {
  state = {
    countries: [],
    res: []
  };

  country = () => {
    this.countries = profiles.filter(el => {
      if (this.state.countries.indexOf(el.country) === -1) {
        this.state.countries.push(el.country);
      }
    });
  };

  filterCountries = country => {
    const filtered = [];

    profiles.forEach(user => {
      if (user.country === country || !country) {
        filtered.push(
          <IdCard
            // className={user.country === country ? "bg-blue" : "bg-white"}
            key={user.firstName}
            firstName={user.firstName}
            lastName={user.lastName}
            country={user.country}
            picture={user.img}
            type={user.isStudent ? "Student" : "Teacher"}
          ></IdCard>
        );
      }
    });

    this.setState({
      res: filtered
    });
  };

  render() {
    this.country();

    return (
      <div>
        <button onClick={() => this.filterCountries()}>all</button>
        {this.state.countries.map(country => {
          return (
            <button onClick={() => this.filterCountries(country)} key={country}>
              {country}
            </button>
          );
        })}
        <div>{this.state.res}</div>
      </div>
    );
  }
}

export default FaceBook;
