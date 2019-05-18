import React, { useState } from "react";
import profiles from "../data/berlin.json";
import IdCard from "../components/IdCard";

const Facebook = () => {
  const countries = profiles.map(profile => profile.country);
  const distinctCountries = [...new Set(countries), "All"];
  const [country, setCountry] = useState("");
  return (
    <div>
      <div className="field is-grouped">
        {distinctCountries.map((item, index) => (
          <p className="control" key={`country${index}`}>
            <button
              onClick={() => {
                setCountry(item);
              }}
              className="button"
            >
              {item}
            </button>
          </p>
        ))}
      </div>
      {profiles.map((profile, index) => {
        const person = {
          picture: profile.img,
          type: profile.isStudent ? "Student" : "Teacher",
          ...profile
        };
        let bgSelected = false;
        if (person.country === country || country === "All") bgSelected = true;
        return <IdCard key={index} {...person} bgSelected={bgSelected} />;
      })}
    </div>
  );
};

export default Facebook;
