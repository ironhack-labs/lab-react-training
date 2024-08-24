import data from "../data/berlin.json";
import { useState } from "react";

function Facebook() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const countries = [...new Set(data.map((profile) => profile.country))];

  return (
    <div>
      <div>
        {countries.map((country) => (
          <button
            key={country}
            style={{
              backgroundColor:
                selectedCountry === country ? "lightblue" : "white",
              margin: "5px",
              padding: "5px 10px",
            }}
            onClick={() => setSelectedCountry(country)}
          >
            {country}
          </button>
        ))}
      </div>

      {data.map((profile, index) => (
        <div
          key={index}
          style={{
            backgroundColor:
              selectedCountry === profile.country ? "lightblue" : "white",
          }}
        >
          <img src={profile.img} alt={profile.firstName} />
          <h3>First Name: {profile.firstName}</h3>
          <h3>Last Name: {profile.lastName}</h3>
          <h3>Country: {profile.country}</h3>
          <h3>Status: {profile.isStudent ? "Student" : "Teacher"}</h3>
        </div>
      ))}
    </div>
  );
}

export default Facebook;
