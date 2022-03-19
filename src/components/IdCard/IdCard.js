import "./IdCard.css"

function IdCard({lastName, firstName, gender, height, birth, picture}){
    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={picture} className="img-fluid img-size rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-text">First name: {firstName}</h5>
              <h5 className="card-text">Last name: {lastName}</h5>
              <h5 className="card-text">Gender: {gender}</h5>
              <h5 className="card-text">Height: {height}</h5>
              <h5 className="card-text">Birth: {birth.toString()}</h5>
            </div>
          </div>
        </div>
      </div>
    );
}

export default IdCard