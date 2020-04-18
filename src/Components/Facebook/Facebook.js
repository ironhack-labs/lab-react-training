import React, { Component } from "react";
import profiles from "../../data/berlin.json";

class Facebook extends Component {
  render() {
    let countryArr = [];
    profiles.map((item, index) => {
      countryArr[index] = item.country;
    });
    let uniqueItems = Array.from(new Set(countryArr));

    return (
      <div>
        <div>
          {uniqueItems.map((item, index) => {
            return (
              <div 
              className="country" 
              key={index}
              onClick=""
              >
                {item}
              </div>
            );
          })}
        </div>

        {profiles.map((item, index) => {
          countryArr[index] = item.country;
          return (
            <div className="card" key={index}>
              <img alt="" src={item.img}></img>
              <div>
                <div>Name: {item.firstName}</div>
                <div>Family Name: {item.lastName}</div>
                <div>Country: {item.country}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Facebook;
