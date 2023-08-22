import "../components.css";

function IdCard(props) {
  return (
    <div className="studentIdCard">
      <img src={props.picture} alt="" />
      <p>
        <strong>Last Name: </strong>
        {props.astName}
      </p>
      <p>
        <strong>First Name: </strong>
        {props.firstName}
      </p>
      <p>
        <strong>Gender: </strong>Gender: {props.gender}
      </p>
      <p>
        <strong>Height: </strong>
        {props.height}
      </p>
      <p>
        <strong>Birth: </strong>
        {props.birth.toDateString()}
      </p>
    </div>
  );
}

export default IdCard;
