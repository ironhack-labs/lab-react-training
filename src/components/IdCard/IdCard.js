import './IdCard.css';

const IdCard = (props) => {
  return (
    <div className="IdCard">
      <div className="card-container">
        <img src={props.picture} alt={props.firstName} />
        <div>
          <p><b>Firts Name:</b>{props.firstName} </p>
          <p><b>Last Name:</b>{props.lastName} </p>
          <p><b>Gender:</b>{props.gender} </p>
          <p><b>Height:</b>{props.height} </p>
          <p><b>Birth:</b>{props.birth}</p>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
