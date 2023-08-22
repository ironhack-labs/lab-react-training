const IdCard2 = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className="id-card">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div>
        <p>Last Name: {lastName}</p>
        <p>First Name: {firstName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height} cm</p>
        <p>Birth: {birth.toDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard2;
