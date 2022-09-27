const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className="IdCard-container">
      <img src={picture}></img>
      <div>
        <p>
          <span style={{ fontWeight: 'bold' }}>First name: </span> {firstName}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Last name: </span> {lastName}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Gender: </span> {gender}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Height: </span> {height}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Birth: </span> {birth.toString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
