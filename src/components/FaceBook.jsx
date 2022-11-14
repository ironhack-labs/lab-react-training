import profiles from '../data/berlin.json';
import { v4 as uuidv4 } from 'uuid';

const profilesWithIds = profiles.map((profile) => ({
  ...profile,
  id: uuidv4(),
}));

function FaceBook() {
  return (
    <>
      <h2>Facebook</h2>
      <div className="facebook-container">
        {profilesWithIds.map((profile) => {
          return (
            <div className="card" key={profile.id}>
              <img src={profile.img} alt={profile.firstName} />
              <div className="credentials">
                <p>
                  <span className="bold">First name: </span>
                  {profile.firstName}
                </p>
                <p>
                  <span className="bold">Last name: </span>
                  {profile.lastName}
                </p>
                <p>
                  <span className="bold">Country: </span>
                  {profile.country}
                </p>
                <p>
                  <span className="bold">Type </span>
                  {profile.isStudent ? 'Student' : 'Teacher'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default FaceBook;
