function IdCard({ personList }) {
    return (
      <div className="d-flex flex-wrap">
        {personList.map((person, index) => (
          <div key={index} className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={person.img}
                  className="img-fluid rounded-start"
                  alt={`Picture of ${person.firstName} ${person.lastName}`}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    {person.firstName} {person.lastName}
                  </h5>
                  <p className="card-text">
                    Gender: {person.gender}
                    <br />
                    Height: {person.height} cm
                    <br />
                    Birthdate: {person.birth}
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default IdCard;