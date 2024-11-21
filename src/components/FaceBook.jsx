import { useState } from "react";
import profiles from "../data/berlin.json";

function FaceBook() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  // function for handling the click
  const handleCountryClick = (country) => {
    console.log("country clicked", country);
    setSelectedCountry(country);
  };

  const getProfileStyle = (profile) => {
    return profile.country === selectedCountry
      ? { backgroundColor: "lightblue" }
      : {};
  };

  // all these for the buttons
  const countries = profiles.map((profile) => profile.country);
  const uniqueCountries = new Set(countries);
  const uniqueCountriesArray = [...uniqueCountries];
  console.log("uniqueCountriesArray", uniqueCountriesArray);

  return (
    <div className="facebook">
      <div className="buttons-facebook">
        <button onClick={() => handleCountryClick(null)}>all</button>
        {uniqueCountriesArray.map((country, index) => (
          <button
            key={index}
            onClick={() => handleCountryClick(country)}
            style={{
              backgroundColor: selectedCountry === country ? "lightblue" : "",
            }}
          >
            {country}
          </button>
        ))}
      </div>
      <div className="facebook-profiles">
        {profiles.map((profile, index) => (
          <div
            className="facebook-profile"
            key={index + profile.firstName}
            style={getProfileStyle(profile)}
          >
            <img className="facebook-img" src={profile.img}></img>
            <div className="facebook-profile-infos">
              <p className="facebook-description">
                <strong>Firstname:</strong>
                {profile.firstName}
              </p>
              <p className="facebook-description">
                <strong>Last name:</strong>
                {profile.lastName}
              </p>
              <p className="facebook-description">
                <strong>Country:</strong>
                {profile.country}
              </p>
              <p className="facebook-description">
                <strong>Type:</strong>
                {profile.isStudent ? " Student" : " Teacher"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaceBook;
