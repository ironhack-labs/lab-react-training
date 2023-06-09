import profilesJson from '../data/berlin.json';
import { useState } from 'react';

function FaceBook() {
  const [profiles, setProfiles] = useState(profilesJson);

  return (
    <>
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
