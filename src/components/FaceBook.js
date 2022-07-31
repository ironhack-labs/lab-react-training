import profiles from '../data/berlin.json';

function FaceBook() {
  const { firstName, lastName, country, img, isStudent } = profiles;

  return (
    <>
      {profiles.map((profile, index) => {
        return (
          <div className="id-card" key={index}>
            <img
              src={profile.img}
              alt="{profile.firstName} profile picture"
              style={{ width: 100, height: 100 }}
            />
            <div className="data">
              <p>
                {' '}
                <b>First Name:</b> {profile.firstName}
              </p>
              <p>
                {' '}
                <b>Last Name:</b> {profile.lastName}
              </p>
              <p>
                {' '}
                <b>Country:</b> {profile.country}
              </p>
              <p>
                {' '}
                <b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FaceBook;
