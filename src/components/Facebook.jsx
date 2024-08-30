import profiles from "../data/berlin.json"

function FaceBook() {
  return (
    <div>
      {profiles.map((profile, index) => (
        <div key={index} style={{
          border: '1px solid black',
          padding: '10px',
          margin: '10px 0',
          display: 'flex',
          alignItems: 'center'
        }}>
          <img
            src={profile.img}
            alt={profile.firstName}
            style={{ width: '100px', height: '100px', marginRight: '20px' }}
          />
          <div>
            <p><strong>First Name:</strong> {profile.firstName}</p>
            <p><strong>Last Name:</strong> {profile.lastName}</p>
            <p><strong>Country:</strong> {profile.country}</p>
            <p><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaceBook;
