const IdCard = (props) => {
  const { height, birth } = props

  return (
    <div className="IdCard">
      <div className="id-img-container">
        <img src={props.picture} alt="imageId" />
      </div>
      <div>
        <p>
          <b>First name:</b> {props.firstName}
        </p>
        <p>
          <b>Last name:</b> {props.lastName}
        </p>
        <p>
          <b>Gender:</b> {props.gender}
        </p>
        <p>
          <b>Height:</b> {String(height)[0] + '.' + String(height).slice(1)}
        </p>
        <p>
          <b>Birth:</b> {String(birth).slice(0, 15)}
        </p>
      </div>
    </div>
  );
}

export default IdCard