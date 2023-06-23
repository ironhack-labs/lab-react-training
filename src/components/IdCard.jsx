function IdCard(props) {
  const { idCard } = props;

  return (
    <div className="IdCard">
      <div className="profileImg">
        <img src={idCard.picture} alt="profileImg"></img>
      </div>
      <div className="profileData">
        <p><b>First name:</b> {idCard.firstName}</p>
        <p><b>Last name:</b> {idCard.lastName}</p>
        <p><b>Gender:</b> {idCard.gender}</p>
        <p><b>Height:</b> {idCard.height}</p>
        <p><b>Birth:</b> {idCard.birth}</p>
      </div>
    </div>
  );
}

export default IdCard;
