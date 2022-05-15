function IdCard(props) {
  const { firstName, lastName, gender, height, birth, picture } = props;

  return (
    <div className="IdCard">
      <img src={picture} alt="" />

      <div>
        <p><b>First Name:</b>{firstName}</p>
      
        <p><b>Last Name:</b> {lastName}</p>
        <p><b>Gender:</b> {gender}</p>
        <p><b>Height:</b> {height}</p>
        <p><b>Birth:</b> {birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
