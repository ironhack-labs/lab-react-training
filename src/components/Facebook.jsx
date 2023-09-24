import React from "react";
import { useState } from "react";
import profiles from "../data/berlin.json";
import { all } from "axios";

export default function Facebook() {
  let allCountries = [];

  //First: make an array of all countries that are unique. Meaning no duplicates
  profiles.forEach((e) => {
    if (allCountries.indexOf(e.country) === -1) {
      // e.country's value가 allC에 없으면! (중복 금지 위해)
      allCountries.push(e.country);
    }
  });

  //Second: Setting up a function that makes an updated array with update people object
  const [people, setPeople] = useState(profiles);

  function handleCountry(countryName) {
    for (let i = 0; i < people.length; i++) {
      let currentPerson = people[i];
      if (currentPerson.country === countryName) {
        currentPerson.style = "aqua";
        let newPeople = [...people]; //creating a new array (direct modifying is not recommended in React)
        setPeople(newPeople);
      }
    }
  }

  return (
    <div>
      {allCountries.map((e, i) => {
        return (
          <button
            onClick={() => {
              handleCountry(e);
            }}
          >
            {e}
          </button>
        );
      })}
      <div>
        {people.map((e, i) => {
          return(
            <div
              key={i}
              className="facebook-box"
              style={{ background: e.style }}
            >
              <div>
                <img
                  src={e.img}
                  alt="facebook-picture"
                  style={{ height: "100px" }}
                />
              </div>
              <div>
                <div className="fbContainer">
                  <h4>First Name:</h4>
                  <h6>{e.firstName}</h6>
                </div>
                <div className="fbContainer">
                  <h4>Last Name:</h4>
                  <h6>{e.lastName}</h6>
                </div>
                <div className="fbContainer">
                  <h4>Country:</h4>
                  <h6>{e.country}</h6>
                </div>
                <div className="fbContainer">
                  <h4>Type:</h4>
                  {e.isStudent ? <h6>Student</h6> : <h6>Teacher</h6>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
