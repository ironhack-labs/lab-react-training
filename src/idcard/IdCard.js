import './IdCard.css';

function IdCard(props) {
  console.log(props);
  return (
    <div className="IdCard">
      <p>
        <strong>name: </strong>
        {props.lastName}
      </p>
      <p>
        <strong>firstName: </strong>
        {props.firstName}
      </p>
      <p>
        <strong>gender: </strong>
        {props.gender}
      </p>
      <p>
        <strong>height: </strong>
        {`${props.height} m`}
      </p>

      <p>
        <strong>birth: </strong>
        {props.birth}
      </p>

      <img src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
    </div>
  );
}

export default IdCard;
