const IdCard = (props) => {
  return (
    <div className="cardProfile">
      <img src={props.picture} alt='profile' />
      <div className="dataProfile">
        <span>
          <b>First Name:</b> {props.firstName}
        </span>
        <span>
          <b>Last Name:</b> {props.lastName}
        </span>
        <span>
          <b>Gender:</b> {props.gender}
        </span>
        <span>
          <b>Height:</b> {props.height}
        </span>
        <span>
          <b>Birth:</b> {props.birth}
        </span>
      </div>
    </div>
  );
};

export default IdCard;
