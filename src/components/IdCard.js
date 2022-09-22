function IdCard(props) {
  const { picture, firstName, lastName, gender, height, birth } = props;
  return (
    <div className="card">
      <div className="img-container">
        <img src={picture} alt={firstName} />
      </div>
      <div>
        <p>
          <strong>First Name: </strong>
          {firstName}
        </p>
        <p>
          <strong>Last Name: </strong>
          {lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {gender}
        </p>
        <p>
          <strong>Height: </strong>
          {height}
        </p>
        <p>
          <strong>Birth: </strong>
          {birth}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
