const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className="idCardContainer">
      <img src={picture} alt={firstName} className="idContainerImg" />
      <div>
        <p>
          <b>First name: </b>
          {lastName}
        </p>
        <p>
          <b>Last name: </b>
          {firstName}
        </p>
        <p>
          <b>Gender: </b>
          {gender}
        </p>
        <p>
          <b>Height: </b>
          {height}
        </p>
        <p>
          <b>Birth: </b>
          {birth}
        </p>
      </div>
    </div>
  );
};
export default IdCard;
