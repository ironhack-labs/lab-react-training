import profilesJson from '../data/berlin.json';
import { useState } from 'react';

function FaceBook() {
  const [profiles, setProfiles] = useState(profilesJson);

  return (
    <>
      <div className="facebook-button">
        <button>All</button>
        <button
          onClick={() => {
            profiles.map((profile) =>
              if(profile.contry === 'USA') {
                profile.filter()
              }
            );
          }}
        >
          USA
        </button>
        <button>England</button>
        <button>Malaysia</button>
        <button>Germany</button>
        <button>Sweden</button>
        <button>Nigeria</button>
        <button>Italy</button>
        <button>Scotland</button>
        <button>Kazakhstan</button>
        <button>Russia</button>
        <button>Catalonia</button>
        <button>France</button>
        <button>Israel</button>
        <button>Brazil</button>
        <button>Taiwan</button>
        <button>Turkey</button>
        <button>Norway</button>
      </div>
      {profiles.map((profile) => {
        return (
          <div className="id-card">
            <img src={profile.img} alt={profile.firstName} />
            <div className="card-info">
              <p>First Name: {profile.firstName}</p>
              <p>Last Name: {profile.lastName}</p>
              <p>Country: {profile.country}</p>
              {profile.isStudent ? <p>Type: Student</p> : <p>Type: Teacher</p>}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FaceBook;
