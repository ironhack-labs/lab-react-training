function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div>
      <div className="card" style={{ width: '30%' }}>
        <div className="card-body d-flex justify-content-start">
          <img
            style={{ maxWidth: '150px' }}
            src={picture}
            className="card-img-top"
            alt=""
          />
          <div className="container d-flex flex-column">
            <div className="card-text">
              <b>First Name:</b> {firstName}
            </div>
            <div className="card-text">
              <b>Last Name:</b> {lastName}
            </div>
            <div className="card-text">
              <b>Gender:</b> {gender}
            </div>
            <div className="card-text">
              <b>Height:</b> {height}
            </div>
            <div className="card-text">
              <b>Birth:</b> {birth}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
