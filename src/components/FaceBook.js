import React, { useState } from 'react';
import data from '../data/berlin.json';

let countries = data.map((x) => x.country);
countries = Array.from(new Set(countries));

function Facebook() {
  const [country, setCountry] = useState();
  const [active, setActive] = useState();
  const [users, setUsers] = useState(data);
  const [search, setSearch] = useState('');

  return (
    <div className="bg-gray-100 p-10 border-black">
      <h1 className="text-2xl font-bold mb-4">List of Profiles</h1>
      <input
      className='border mr-4'
        value={search}
        onChange={(ev) => {
          setSearch(ev.target.value);
        }}
      />

      <button
        className="btn btn-primary mb-3"
        onClick={() => {
          setUsers([...users.reverse()]);
        }}
      >
        sort
      </button>
      <div className="d-flex mb-4">
        <button
          className="btn btn-light mr-3 border"
          onClick={() => setCountry(undefined)}
        >
          All
        </button>
        {countries.map((c) => (
          <button
            onClick={() => setCountry(c)}
            className="btn btn-light mr-3 border"
          >
            {c}
          </button>
        ))}
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4  border-color ">
        {users
          .filter((x) => country === undefined || x.country === country)
          .filter(x => x.firstName.includes(search))
          .map((profile) => (
            <div className="card card border-success" key={profile.id}>
              <img
                src={profile.img}
                alt="profilePic"
                className="w-80 mb-4 rounded-lg"
                onClick={() =>
                  setActive(profile === active ? undefined : profile)
                }
              />
              {profile === active && (
                <>
                  <h2 className="card card border-success">
                    {profile.firstName} {profile.lastName}
                  </h2>
                  <p className="text-sm mb-1">Country: {profile.country}</p>
                  <p className="text-sm mb-1">
                    Type: {profile.isStudent ? 'Student' : 'Teacher'}
                  </p>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Facebook;
