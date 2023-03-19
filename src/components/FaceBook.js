import React, { useState, useEffect } from 'react';
import data from '../data/berlin.json';

function Facebook() {
  const [profilesList, setProfilesList] = useState([]);

  useEffect(() => {
    setProfilesList(data);
  }, []);

  return (
    <div className="bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-4">List of Profiles</h1>
      <div className="grid grid-cols-3 gap-4">
        {profilesList.map((profile) => (
          <div className="bg-white p-4 rounded-lg shadow" key={profile.id}>
            <img src={profile.img} alt="profilePic" className="w-full mb-4 rounded-lg"/>
            <h2 className="text-base font-bold mb-2">{profile.firstName} {profile.lastName}</h2>
            <p className="text-sm mb-1">Country: {profile.country}</p>
            <p className="text-sm mb-1">Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facebook;