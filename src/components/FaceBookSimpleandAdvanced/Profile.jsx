import './Profile.css'
function Profile({profile, isSelected, all}) {
  return (
    <div className={`profile ${isSelected ? 'blue-background' : ''} ${all ? 'blue-background' : ''}`}>
      <img src={profile.img} alt="profile image" />
      <div>
        <p><b>First name:</b> {profile.firstName}</p>
        <p><b>Last name:</b> {profile.lastName}</p>
        <p><b>Country:</b> {profile.country}</p>
        <p><b>Type:</b> {profile.isStudent ? "Student" : "Teacher" }</p>
      </div>
    </div>
  );
}

export default Profile
