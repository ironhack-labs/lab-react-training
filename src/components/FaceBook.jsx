import profiles from '../data/berlin.json';

const createId = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (a) =>
    (a ^ ((Math.random() * (16 >> a)) / 4)).toString(16)
  );
};
const profilesWithIds = profiles.map((profile) => ({
  ...profile,
  id: createId(),
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
