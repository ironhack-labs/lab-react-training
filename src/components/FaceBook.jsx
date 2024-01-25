import profiles from "./data/berlin.json";

function FaceBook({ profiles }) {
  return (
    <div>
      {profiles.map(profile => (
        <div>
          <img src={profile.img} />
          <p>
            <strong>First Name</strong>: {profile.firstName}
          </p>
          <p>
            <strong>Last Name</strong>: {profile.lastName}
          </p>
          <p>
            <strong>Country</strong>: {profile.country}
          </p>
          <p>
            <strong>Type</strong>: {profile.isStudent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FaceBook;
