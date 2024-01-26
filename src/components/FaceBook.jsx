import profiles from "./../data/berlin.json";
import { useState } from "react";

function FaceBook() {
    const uniqueCountries = [...new Set(profiles.map(profile => profile.country))];
    const [ selectedCountry, setSelectedCountry ] = useState(null);

    const handleCountry = country => {
        setSelectedCountry(country);
    }

    const handleAll = () => {
        setSelectedCountry(null);
    }

  return (
    <div>
        <div>
        <button onClick={handleAll}>All</button>
            {uniqueCountries.map((country, index) => (
                <button
                key={index}
                onClick={(() => handleCountry(country))}
                >
                {country}
                </button>
            ))}
        </div>
      {profiles.map((profile, index) => (
        <div key={index} style={{ backgroundColor: profile.country === selectedCountry ? "LightSkyBlue" : "white"}}>
          <img src={profile.img} style={{ width: "25%" }}/>
          <p>
            <strong>First Name</strong>: {profile.firstName}
          </p>
          <p>
            <strong>Last Name</strong>: {profile.lastName}
          </p>
          <p>
            <strong>Country</strong>: {profile.country}
          </p>
          <p>
            <strong>Type</strong>: {profile.isStudent ? "Student" : "Teacher"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FaceBook;
