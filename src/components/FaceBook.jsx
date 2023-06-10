import { useState } from 'react';
import profiles from './../data/berlin.json';
import { nanoid } from 'nanoid';

function FaceBook() {
  const countries = Array.from(
    new Set(profiles.map((item) => item.country))
  ).sort();
  countries.unshift('All countries');

  const [filterCountry, setFilterCountry] = useState('All countries');

  const highlightCountry = (event) =>
    setFilterCountry(event.target.textContent);

  return (
    <div className="facebook">
      <div className="filter">
        {countries.map((country) => (
          <button
            onClick={highlightCountry}
            key={nanoid()}
            className={filterCountry === country ? 'highlighted' : null}
          >
            {country}
          </button>
        ))}
      </div>
      <div className="grid">
        {profiles.map((profile) => (
          <article
            key={nanoid()}
            className={filterCountry === profile.country ? 'highlighted' : null}
          >
            <img
              src={profile.img}
              alt={(profile.firstName, profile.lastName)}
              width="150"
              height="150"
            />

            <h4>
              {profile.firstName} {profile.lastName}
            </h4>
            <p>
              <strong>Country:</strong> {profile.country}
              <br />
              <strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default FaceBook;
