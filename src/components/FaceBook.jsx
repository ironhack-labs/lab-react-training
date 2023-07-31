import berlinDataJSON from '../data/berlin.json'
import { useState } from 'react'

function FaceBook() {
  const [filter, setFilter] = useState('...')
  const countries = ["All", "England", "USA", "Malaysia", "Germany", "..."]

  const hanldeFilterButton = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div className="FaceBook">
      <div className="FilterButtons">
        {countries.map((country, i) => (
          <button
            key={country + i}
            value={country}
            className='FilterButton'
            onClick={hanldeFilterButton}
            style={
              country === filter
                ? { backgroundColor: 'lightcyan' }
                : { backgroundColor: 'white' }
            }
          >
            {country}
          </button>
        ))}
      </div>

      {berlinDataJSON.map((profile, i) => {
        const { firstName, lastName, country, img, isStudent } = profile;
        return (
          <div
            className="IdCard"
            key={firstName + lastName + i}
            style={
              country === filter
                ? { backgroundColor: 'lightcyan' }
                : filter === 'All'
                  ? { backgroundColor: 'lightcyan' }
                  : { backgroundColor: 'white' }
            }
          >
            <div className="profile-img-container">
              <img src={img} alt="imageId" />
            </div>
            <div>
              <p>
                <b>First name:</b> {firstName}
              </p>
              <p>
                <b>Last name:</b> {lastName}
              </p>
              <p>
                <b>Country:</b> {country}
              </p>
              <p>
                <b>Type:</b> {isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FaceBook