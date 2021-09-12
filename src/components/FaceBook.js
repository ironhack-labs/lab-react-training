import React, { useState } from 'react';
import profiles from '../data/berlin.json';
import FaceBookButton from './FaceBookButtons';
import './FaceBook.css';

profiles.forEach((profile) => (profile.hide = true));
profiles.forEach((profile) => (profile.selected = false));

const renderProfiles = (profs, setProfs, search) => {
  return profs.map((profile, index) => {
    const regex = new RegExp(search, 'gi');

    if (
      profile.firstName.match(regex) ||
      profile.lastName.match(regex) ||
      profile.country.match(regex)
    ) {
      return (
        <div
          key={index}
          className="facebook-container"
          style={{
            backgroundColor: profile.selected
              ? 'rgba(150,150,255,0.75)'
              : 'inherit',
          }}
        >
          <img
            src={profile.img}
            alt="User"
            onClick={() => {
              profs[index].hide = !profs[index].hide;
              setProfs([...profs]);
            }}
          />
          <div
            className="facebook-info-container"
            style={{ display: profile.hide ? 'none' : 'block' }}
          >
            <p>
              <strong>First Name:</strong> {profile.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {profile.lastName}
            </p>
            <p>
              <strong>Country:</strong> {profile.country}
            </p>
            <p>
              <strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      );
    } else return null;
  });
};

const handleSort = (profs, setProfs) => {
  const newProfs = [];
  while (profs.length) {
    const randomIndex = Math.floor(Math.random() * profs.length);
    newProfs.push(...profs.splice(randomIndex, 1));
  }
  setProfs([...newProfs]);
};

const FaceBook = () => {
  const [profs, setProfs] = useState([...profiles]);
  const [search, setSearch] = useState('');

  return (
    <div className="facebook-big-container">
      <h1>CHERNOBIL'S FACEBOOK</h1>
      <FaceBookButton profs={profs} setProfs={setProfs} />
      <button className="sort" onClick={() => handleSort(profs, setProfs)}>
        Sort
      </button>
      <input
        className="search-bar"
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {renderProfiles(profs, setProfs, search)}
    </div>
  );
};

export default FaceBook;
