function IdCard({lastName, firstName, gender, height, birth, picture}) {
  return (
    <div className="idCard">

      <div className="imageCard">
        <img
          src={picture}
          alt={`${firstName} ${lastName}`}
        ></img>
      </div>

      <div className="descriptionsCard">
        <p className="description">
          <strong>First name:</strong> {firstName}
        </p>
        <p className="description">
          <strong>Last name: </strong>
          {lastName}
        </p>
        <p className="description">
          <strong>Gender:</strong> {gender}
        </p>
        <p className="description">
          <strong>Height:</strong> {height}m
        </p>
        <p className="description">
          <strong>Birth:</strong> {birth.toDateString()}
        </p>
      </div>
      
    </div>
  );
}

export default IdCard;
