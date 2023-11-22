

function IdCard({ firstName, lastName, gender, image, height, birth }) {
  return (
    <div className="card m-3" style={{ maxWidth: "700px" }}>
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img src={image} className="img-fluid rounded-start" style={{width:'175px'}} alt="Profile" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{firstName} {lastName}</h5>
            <p className="card-text">Gender: {gender}</p>
            <p className="card-text">Height: {height}</p>
            <p className="card-text">Birth: {birth.toString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdCard;

