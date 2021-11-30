import './IdCard.css';

const IdCard = (props) => {
  return (
    <div className="IdCard">
      <div className="card-container">
        <img src={props.picture} alt={props.firstName} />
        <div className="id-content">
          <p><b>First name:</b> {props.firstName} </p>
          <p><b>Last name:</b> {props.lastName} </p>
          <p><b>Gender:</b> {props.gender} </p>
          <p><b>Height:</b> {props.height/100}m </p>
          <p><b>Birth:</b> {props.birth.toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
