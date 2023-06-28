export default function FacebookCard(props) {
  const { profile } = props;
  return (
    <div className="Idcard Border" style={props.style}>
      <div>
        <img src={profile.img} alt="Profile" />
      </div>
      <div className="Iddata">
        <p>
          <span>First Name: </span>
          {profile.firstName}
        </p>
        <p>
          <span>Last Name: </span>
          {profile.lastName}
        </p>
        <p>
          <span>Country: </span>
          {profile.country}
        </p>
        <p>
          <span>Type: </span>
          {profile.isStudent ? 'Student' : 'Teacher'}
        </p>
      </div>
    </div>
  );
}
