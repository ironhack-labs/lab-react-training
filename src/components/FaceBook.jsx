import React, { useEffect } from 'react';
import { useState } from 'react';
import profiles from '../data/berlin.json';
import './FaceBook.css';

export default function FaceBook() {
  const [filters, setFilters] = useState(['All']);
  const [selectedFilter, setSelectedFilter] = useState('');

  useEffect(() => {
    console.log(profiles);
    const countries = Array.from(
      new Set(profiles.map((human) => human.country))
    );
    setFilters([...filters, ...countries]);
  }, []);

  const selectFilter = (filterName) => {
    setSelectedFilter(filterName);
  };

  useEffect(()=>{
    console.log("selectedFilter : ", selectedFilter)
  },[selectFilter])

  return (
    <div className="FaceBook">
      <ul className="filters">
        {filters.map((filter) => {
          return <li onClick={() => selectFilter(filter)}>{filter}</li>;
        })}
      </ul>
      <ul>
        {profiles.map((profile) => {
          return (
            <li
              className={
                selectedFilter === 'All' || profile.country === selectedFilter
                  ? 'FBCard blueBackground'
                  : 'FBCard'
              }
            >
              <img src={profile.img} />
              <div className="rightSide">
                <p>
                  <strong>First name:</strong> {profile.firstName}
                </p>
                <p>
                  <strong>Last name:</strong> {profile.lastName}
                </p>
                <p>
                  <strong>Country:</strong> {profile.country}
                </p>
                <p>
                  <strong>Type:</strong>{' '}
                  {profile.isStudent ? 'Student' : 'Teacher'}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
