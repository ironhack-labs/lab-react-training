function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div>
      <div className="card m-3 " style={{ width: '30%' }}>
        <div className="card-body d-flex justify-content-start border border-3 border-dark">
          <img
            style={{ maxWidth: '150px' }}
            src={picture}
            className="card-img-top"
            alt=""
          />
          <div className="container d-flex flex-column fs-6">
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
              <b>Birth:</b> {birth.toDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
