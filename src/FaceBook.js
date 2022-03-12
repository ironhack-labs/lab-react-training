import profiles from './data/berlin.json';

function FaceBook() {
  return (
    <div>
      {profiles.map((profile) => (
        <div className="id-card">
          <img src={profile.img}></img>
          <div>
            <b>First Name:</b> {profile.firstName}
            <br />
            <b>Last Name:</b> {profile.lastName}
            <br />
            <b>Country:</b> {profile.country}
            <br />
            <b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaceBook;
