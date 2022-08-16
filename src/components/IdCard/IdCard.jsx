import './IdCard.css';

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div className="idCard">
      <div>
        <img src={picture} />
      </div>
      <div>
        <p>
          <strong>First Name: </strong> {firstName}
        </p>
        <p>
          <strong>Last Name: </strong> {lastName}
        </p>
        <p>
          <strong>Gender: </strong> {gender}
        </p>
        <p>
          <strong>Height: </strong> {height}
        </p>
        <p>
          <strong>Birth: </strong> {birth}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
