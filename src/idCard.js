const IdCard = (props) => {
  const { firstName, lastName, gender, height, birth, picture } = props;
  return (
    <div className="idCard">
      <p>Last Name: {lastName}</p>
      <p>First Name: {firstName}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Birth: {birth.toDateString()}</p>
      <img src={picture} alt={firstName + lastName}></img>
    </div>
  );
};
export default IdCard;
