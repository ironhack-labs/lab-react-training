function Profile({ firstName, lastName, country, img, isStudent }) {
    return (
      <div className="profile">
        <img src={img} alt={firstName} />
        <div>
          <strong>First Name:</strong> {firstName}
        </div>
        <div>
          <strong>Last Name:</strong> {lastName}
        </div>
        <div>
          <strong>Country:</strong> {country}
        </div>
        <div>
          <strong>Type:</strong> {isStudent ? 'Student' : 'Teacher'}
        </div>
      </div>
    );
  }
  
  export default Profile;