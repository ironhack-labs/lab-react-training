import profiles from "../data/berlin.json";
import { useState } from "react";

function FaceBook() {
  const allCountries = [
    "All",
    ...profiles
      .map((profile) => profile.country)
      .filter((value, index, array) => {
        return array.indexOf(value) === index;
      }),
  ];

  const [selectedCountry, setSelectedCountry] = useState(allCountries[0]);

  const handleClickButton = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="FaceBook">
      <div className="FaceBook_Selectors">
        {allCountries.map((country, index) => (
          <button key={index} value={country} onClick={handleClickButton} style={{backgroundColor: country==selectedCountry? "#add8e6": "white"}}>
            {country}
          </button>
        ))}
      </div>
      <div className="FaceBook_Profiles">
        {profiles.map((profile, index) => (
          <div className="IdCard" key={index}  style={{backgroundColor: profile.country==selectedCountry? "#add8e6": "white"}}>
            <div className="IdCard__ImageContainer">
              <img src={profile.img} />
            </div>
            <div className="IdCard__InfoContainer">
              <p>
                <strong>First name: </strong>
                {profile.firstName}
              </p>
              <p>
                <strong>Last name: </strong>
                {profile.lastName}
              </p>
              <p>
                <strong>Country: </strong>
                {profile.country}
              </p>
              <p>
                <strong>Type </strong>
                {profile.isStudent ? "Student" : "Teacher"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaceBook;