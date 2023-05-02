function IdCard(props) {
  return (
    <div className="IdCard">
      <div className="contact-image-container">
        <img
          className="contact-foto"
          src={props.picture}
          alt={props.firstName}
        />
      </div>
      <div className="contact-infos">
        <p>
          <b>First Name:</b> {props.firstName}
        </p>
        <p>
          <b>Last Name:</b> {props.lastName}
        </p>
        <p>
          <b>Gender:</b> {props.gender}
        </p>
        <p>
          <b>Height:</b> {props.height}
        </p>
        <p>
          <b>Birth:</b> {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
