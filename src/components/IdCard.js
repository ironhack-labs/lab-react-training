function IdCard(props) {
  return (
    <div className="IdCard">
      <div className="contact-image-container">
        <img
          className="contact-foto"
          src={props.name.img}
          alt={props.name.firstName}
        />
      </div>
      <div className="contact-infos">
        <p>
          <b>First Name:</b> {props.name.firstName}
        </p>
        <p>
          <b>Last Name:</b> {props.name.lastName}
        </p>
        <p>
          <b>Gender:</b> {props.name.gender}
        </p>
        <p>
          <b>Height:</b> {props.name.height}
        </p>
        <p>
          <b>Birth:</b> {props.name.birth}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
