import { useState } from 'react';
import profiles from '../data/berlin.json';

const Facebook = (props) => {
  const [countryFilter, setCountryFilter] = useState('')
  const countries = profiles.map((profile) => profile.country);

  const countryOnly = countries.filter(
    (country, i) => countries.indexOf(country) === i
  );

  const handleButton = (event) => {
        setCountryFilter(event.target.value)
  }

  const handleButtonAll = (event) => {
    setCountryFilter(event.target.value)
    }

  return (
    <div className='facebook'>
      <div className='facebookFilter'>
        <button
        className='buttonFilter'
        value={'All'}
        onClick={handleButtonAll}
        style={
            countryFilter === 'All'
            ? { backgroundColor: 'blue' }
            : { backgroundColor: 'white' }
        }
        >
        All
        </button>
        {countryOnly.map((countrie, i) => (
          <button
            className='buttonFilter'
            value={countrie}
            onClick={handleButton}
            style={
                countrie === countryFilter
                ? { backgroundColor: 'blue' }
                : { backgroundColor: 'white' }
            }
          >
          {countrie}
          </button>
        ))}
        
      </div>

      {profiles.map((profile, i) => (
        <div 
        className="facebook-card"
        style={
            profile.country === countryFilter
                ? { backgroundColor: 'blue' }
                : { backgroundColor: 'white' }
        }
        >
          <div>
            <img src={profile.img} alt="" />
          </div>
          <div>
            <p>
              <b>First Name:</b> {profile.firstName}
            </p>
            <p>
              <b>Last Name:</b> {profile.lastName}
            </p>
            <p>
              <b>Country:</b> {profile.country}
            </p>
            {profile.isStudent && (
              <p>
                <b>Type:</b> Student
              </p>
            )}
            {!profile.isStudent && (
              <p>
                <b>Type:</b> Teacher
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facebook;
