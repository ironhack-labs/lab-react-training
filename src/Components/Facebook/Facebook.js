import React, { Component } from "react";
import profiles from "../../data/berlin.json";

class Facebook extends Component {
  state = {
    list: profiles,
    countries: [],
    color:null
  };

  highLight = (country) => {
    let results = this.state.list.filter(word => word.country == country )
    this.setState({
      color:results
    })
  };

  render() {
    const { countries, list, color } = this.state;
    let temp = []
    profiles.map((item, index) => {
      countries[index] = item.country;
    });
    let uniqueItems = Array.from(new Set(countries));
    color? temp = color: temp = list

    return (
      <div>
        <div>
          {uniqueItems.map((item, index) => {
            return (
              <button onClick={()=> {this.highLight(item)}} key={index} className="country">
                {item}
              </button>
            );
          })}
        </div>

        

        {temp.map((item, index) => {
          return (
            <div className="card" key={index}>
                <img  alt="" src={item.img}></img>
                <div className={this.state.color}>
                  <div>Name: {item.firstName}</div>
                  <div>Family Name: {item.lastName}</div>
                  <div>Country: {item.country}</div>
                  <div>Type: {item.isStudent ? "Student" : "Teacher"}</div>
                </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Facebook;
