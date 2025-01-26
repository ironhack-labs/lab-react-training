import profilesData from "../../data/berlin.json";
import Profile from "./Profile";
import "./FaceBookSimple.css";
import { useState } from "react";
function FaceBookSimple() {
  const [profiles, setProfiles] = useState(profilesData);
  const [currCountry, setCountry] = useState("");
  const [all, setAll] = useState(false)
  const countries = [...new Set(profilesData.map((person) => person.country))];
  const updateCountry = (country) => {
    const selectedCountry = country.toLowerCase();
    setAll(false)
    setCountry(selectedCountry);
    console.log(selectedCountry);
  };
  const selectAll = () => {
    setAll(true)
  }
  return (
    <div className="container">
      <div className="buttons">
        <button onClick={()=> selectAll()}>All</button>
        {countries.map((country) => (
          <button onClick={() => updateCountry(country)} key={country}>
            {country}
          </button>
        ))}
      </div>
      <div className="facebook-simple">
        {profiles.map((profile) => {
          return (
            <Profile
              key={Math.random().toString(36).substr(2, 9)}
              profile={profile}
              isSelected={profile.country.toLowerCase() === currCountry}
              all={all}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FaceBookSimple;
