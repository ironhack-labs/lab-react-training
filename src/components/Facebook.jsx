function Facebook(props) {
  const { profile } = props;
  const { img, firstName, lastName, country, isStudent } = profile;
  console.log(profile);
  return (
    <div className="FacebookCard">
      <div className="ProfileImage">
        <img src={img} alt="Profile" />
      </div>
      <div className="UserInfo">
        <p>
          <b>First Name:</b> {firstName}
        </p>
        <p>
          <b>Last Name</b> {lastName}
        </p>
        <p>
          <b>Country:</b> {country}
        </p>
        <p>
          <b>Type:</b> {isStudent ? 'Student' : 'Teacher'}
        </p>
      </div>
    </div>
  );
}

export default Facebook;
