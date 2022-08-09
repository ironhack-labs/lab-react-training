import './IdCard.css';

function IdCard(props) {
  return (
    <div className="container">
      <div>
        <img src={props.picture} alt={`Imagem of ${props.firtsName}`} />
      </div>
      <div>
        <p>
          <strong>LastName:</strong> {props.lastName}
        </p>
        <p>
          <strong>firstName:</strong> {props.firstName}
        </p>
        <p>
          <strong>gender:</strong> {props.gender}
        </p>
        <p>
          <strong>eight:</strong> {props.height}
        </p>
        <p>
          <strong>birth:</strong> {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
