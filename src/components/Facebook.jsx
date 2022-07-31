import profiles from '../data/berlin.json';
import { useState } from 'react';

const Facebook = (props) => {
  const [Profiles, setProfiles] = useState(profiles);

  const handleSelectCountry = (country) => {
    const countryfiltered = profiles.filter(
      (profile) => profile.country === country.target.value
    );
    setProfiles(countryfiltered)
  };

  return (
    <div>
      <div className="facebookButtons">
        <button>All</button>
        <button onClick={handleSelectCountry} value="USA">
          USA
        </button>
        <button onClick={handleSelectCountry} value="England">
          England
        </button>
        <button onClick={handleSelectCountry} value="Malaysia">
          Malaysia
        </button>
        <button onClick={handleSelectCountry} value="Germany">
          Germany
        </button>
        <button onClick={handleSelectCountry} value="Sweden">
          Sweden
        </button>
        <button onClick={handleSelectCountry} value="Nigeria">
          Nigeria
        </button>
        <button onClick={handleSelectCountry} value="more">
          . . .
        </button>
      </div>
      {props.algo !== 'vale' && <p> Aqui va algo </p>}
      {Profiles.map((profile, index) => (
        <div key={index} className="facebookContainer">
          <div>
            <img src={profile.img} width="150" height="150" alt="" />
          </div>
          <div className="facebookInfo">
            <p>
              First name: <span> {profile.firstName} </span>
            </p>
            <p>
              Last name: <span> {profile.lastName} </span>{' '}
            </p>
            <p>
              Country: <span> {profile.country} </span>{' '}
            </p>
            <p>
              {' '}
              Type:{' '}
              {profile.isStudent ? <span>Student</span> : <span>Teacher</span>}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facebook;
