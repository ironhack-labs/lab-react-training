import profiles from '../data/berlin.json';
console.log(profiles);
function FaceBook() {
  return (
    <div>
        {profiles.map((profile, index) => (
            <div className="profile">
                <img src={profile.img} alt="profile-pic"/>
                <div className="profile-info">
                    <p><strong>First Name:</strong> {profile.firstName}</p>
                    <p><strong>Last Name:</strong> {profile.lastName} </p>
                    <p><strong>Country: </strong>{profile.country}</p>
                    <p><strong>Type: </strong>{profile.isStudent ? 'Student': 'Teacher'}</p>
                </div>
            </div>
        ))
        }
    </div>
  );
}

export default FaceBook;

