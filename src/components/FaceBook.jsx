import React, { useState } from 'react';
import profiles from "../data/berlin.json";
import "./FaceBook.css";

const FaceBook = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [sortedBy, setSortedBy] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [profilesToShow, setProfilesToShow] = useState([...profiles]);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleSortByName = () => {
    const sortedProfiles = [...profilesToShow].sort((a, b) => a.firstName.localeCompare(b.firstName));
    setProfilesToShow(sortedProfiles);
    setSortedBy('name');
  };

  const handleSortByType = () => {
    let sortedProfiles;
    if (sortedBy === 'type') {
      sortedProfiles = [...profilesToShow].reverse();
    } else {
      sortedProfiles = [...profilesToShow].sort((a, b) => {
        if (a.isStudent && !b.isStudent) return -1;
        if (!a.isStudent && b.isStudent) return 1;
        return 0;
      });
    }
    setProfilesToShow(sortedProfiles);
    setSortedBy('type');
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProfiles = profilesToShow.filter(profile =>
    profile.country.includes(selectedCountry ? selectedCountry : '') &&
    (profile.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const renderProfileDetails = (profile) => {
    return (
      <div className="profile-details">
        <b><p>First Name: {profile.firstName}</p></b>
        <b><p>Last Name: {profile.lastName}</p></b>
        <b><p>Country: {profile.country}</p></b>
        <b><p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p></b>
      </div>
    );
  };

  const handleProfileClick = (profile) => {
    const updatedProfilesToShow = profilesToShow.map(p => {
      if (p.id === profile.id) {
        return { ...p, detailsVisible: !p.detailsVisible };
      } else {
        return p;
      }
    });
    setProfilesToShow(updatedProfilesToShow);
  };

  return (
    <div className="container">
      <div className="filters">
        <button className={`filter-button ${selectedCountry === null ? 'active' : ''}`} onClick={() => handleCountryClick(null)}>ALL</button>
        {Array.from(new Set(profiles.map(profile => profile.country))).map(country => (
          <button key={country} className={`filter-button ${selectedCountry === country ? 'active' : ''}`} onClick={() => handleCountryClick(country)}>{country}</button>
        ))}
        <button className="filter-button" onClick={handleSortByName}>Sort by Name</button>
        <button className="filter-button" onClick={handleSortByType}>Sort by Type</button>
        <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
      </div>
      <div className="profiles-container">
        {filteredProfiles.map(profile => (
          <div key={profile.id} className="profile-card" style={{ backgroundColor: profile.country === selectedCountry ? '#f0f8ff' : 'transparent' }}>
            <div className="profile-img" onClick={() => handleProfileClick(profile)}>
              <img src={profile.img || "placeholder.jpg"} alt="Profile" />
            </div>
            {profile.detailsVisible && renderProfileDetails(profile)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaceBook;
