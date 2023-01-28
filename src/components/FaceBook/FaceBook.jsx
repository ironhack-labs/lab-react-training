import profiles from '../../data/berlin.json';
import './FaceBook.css';
import { useState } from 'react';

function FaceBook(props) {
  const { firstName, lastName, country, img, isStudent } = props;
  const [countries, setCountries] = useState('');

  function handleToggleCountry(event) {
    setCountries(event.target.value);
  }

  return (
    <div>
      <div>
        <button onClick={handleToggleCountry} value="All">
          All
        </button>
        <button onClick={handleToggleCountry} value="England">
          England
        </button>
        <button onClick={handleToggleCountry} value="USA">
          USA
        </button>
        <button onClick={handleToggleCountry} value="Malaysia">
          Malaysia
        </button>
        <button onClick={handleToggleCountry} value="Germany">
          Germany
        </button>
        <button onClick={handleToggleCountry} value="Nigeria">
          Nigeria
        </button>
        <button onClick={handleToggleCountry} value="Sweden">
          Sweden
        </button>
      </div>
      <>
        {profiles.map((profile) => (
          <div
            className="facebook"
            style={
              countries === 'All' || countries === profile.country
                ? { backgroundColor: '#A3D2E2' }
                : {}
            }
          >
            <img src={profile.img} alt="profile pic" />

            <div className="facebook-info">
              <p>
                <b>First name:</b> {profile.firstName}
              </p>
              <p>
                <b>Last name:</b> {profile.lastName}
              </p>
              <p>
                <b>Country:</b> {profile.country}
              </p>
              <p>
                <b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}

export default FaceBook;
