function FaceBook({ profiles }) {
  return (
    <div>
      {profiles.map((profile) => {
        return (
          <div key={profile.firstName}>
            <img src={profile.img} height={150} alt={profile.firstName} />
            <p>
              <strong>First Name: </strong>
              {profile.firstName}
            </p>
            <p>
              <strong>Last Name: </strong>
              {profile.lastName}
            </p>
            <p>
              <strong>Country: </strong>
              {profile.country}
            </p>
            {profile.isStudent ? (
              <p>
                <strong>Type:</strong> Student
              </p>
            ) : (
              <p>
                <strong>Type:</strong> Teacher
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FaceBook;
