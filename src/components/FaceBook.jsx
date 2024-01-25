import  { useState } from "react";
import profiles from "../data/berlin.json";

const FaceBook = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProfile, setSelectedProfile] = useState(null);
  
    const countries = [...new Set(profiles.map((profile) => profile.country))];
  
    const filteredProfiles = profiles
      .filter((profile) => selectedCountry === null || profile.country === selectedCountry)
      .filter((profile) => profile.firstName.toLowerCase().includes(searchTerm.toLowerCase()));
  
    const handleCountryClick = (country) => {
      setSelectedCountry(country);
      setSelectedProfile(null);
    };
  
    const handleProfileClick = (profile) => {
      setSelectedProfile(profile);
    };
  
    return (
      <div className="facebook-container">
        <div className="controls">
          <div className="country-buttons">
            <button
              className={selectedCountry === null ? "active" : ""}
              onClick={() => handleCountryClick(null)}
            >
              All
            </button>
            {countries.map((country) => (
              <button
                key={country}
                className={selectedCountry === country ? "active" : ""}
                onClick={() => handleCountryClick(country)}
              >
                {country}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="profiles">
          {filteredProfiles.map((profile, index) => (
            <div
              key={index}
              className={`profile-card ${selectedCountry === profile.country ? "selected" : ""}`}
              onClick={() => handleProfileClick(profile)}
            >
              <img src={profile.img} alt={`${profile.firstName} ${profile.lastName}`} />
              <div className="profile-details">
                <p>
                  <b>Name:</b> {`${profile.firstName} ${profile.lastName}`}
                </p>
                <p>
                  <b>Country:</b> {profile.country}
                </p>
                <p>
                  <b>Student:</b> {profile.isStudent ? "Yes" : "No"}
                </p>
              </div>
            </div>
          ))}
        </div>
        {selectedProfile && (
          <div className="selected-profile">
            <h2>{`${selectedProfile.firstName} ${selectedProfile.lastName}`}</h2>
            <p><b>Country:</b> {selectedProfile.country}</p>
            <p><b>Student:</b> {selectedProfile.isStudent ? "Yes" : "No"}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default FaceBook;