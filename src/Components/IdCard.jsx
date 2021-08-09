import '../Styles/IdCard.css';

function formatBirthDate(date) {
  return date.toDateString();
}

function IdCard(props) {
  return (
    <div className="idCard">
      <div className="idCard-picture">
        <img src={props.picture} alt={props.lasName} />
      </div>

      <div className="idCard-info">
        <p>
          <b>LastName: </b>
          {props.lastName}
        </p>
        <p>
          <b>FirstName: </b>
          {props.firstName}
        </p>
        <p>
          <b>Gender: </b>
          {props.gender}
        </p>
        <p>
          <b>Height: </b>
          {props.height}
        </p>
        <p>
          <b>Birth: </b>
          {formatBirthDate(props.birth)}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
