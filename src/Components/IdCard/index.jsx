/* eslint-disable react/prop-types */

function IdCard(props) {
  return (
    <div className="IdCard">
      <div><img src={props.picture} /></div>
      <div>
        <p>
          <b>First Name: </b>
          {props.firstName}
        </p>
        <p>
          <b>Last Name: </b>
          {props.lastName}
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
          {props.birth.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
