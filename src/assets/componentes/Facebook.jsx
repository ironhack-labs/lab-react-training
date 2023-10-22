import profiles from '../../data/berlin.json';

function FaceBook() {
    return (
      <div className="facebook">
        {profiles.map((profile) => (
          <div className="profile-card" key={profile.id}>
            <img src={profile.img} alt={`${profile.firstName} ${profile.lastName}`} />
            <h2>{`${profile.firstName} ${profile.lastName}`}</h2>
            <p>Country: {profile.country}</p>
            <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default FaceBook;