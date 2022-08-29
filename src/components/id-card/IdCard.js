import './IdCard.css'

function IdCard({lastName,firstName, gender, height, birth, picture}) {
  return (
    <div className="id-card">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-2">
            <img src={picture} alt={`${firstName} ${lastName}`} />
          </div>
          <div className="col-4 text-start">
            <div className="d-flex flex-column id-card__details">
              <p><span className="fw-bold">First name</span>{firstName}</p>
              <p><span className="fw-bold">Last name</span>{lastName}</p>
              <p><span className="fw-bold">Gender</span>{gender}</p>
              <p><span className="fw-bold">Height</span>{height}</p>
              <p><span className="fw-bold">Bird</span>{birth.toDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdCard;