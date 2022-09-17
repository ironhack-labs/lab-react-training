function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
  console.log(props.lastName);
  return (
    <div className="idCard">
      <span className="lastName">Last Name: {lastName}</span>
      <span className="firstName">First Name: {firstName}</span>
      <span className="gender">Gender: {gender}</span>
      <span className="height">Height: {height}</span>
      <span className="birth">{birth.toDateString()}</span>
      <img src={picture} className="picture"></img>
    </div>
  );
}

export default IdCard;
