const IdCard = (props) => {
  const { picture, firstName, lastName, gender, height, birth } = props

  return (
    <div className="IdCard">
      <div className="id-img-container">
        <img src={picture} alt="imageId" />
      </div>
      <div>
        <p>
          <b>First name:</b> {firstName}
        </p>
        <p>
          <b>Last name:</b> {lastName}
        </p>
        <p>
          <b>Gender:</b> {gender}
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