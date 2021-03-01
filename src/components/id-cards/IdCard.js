

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric"
  };

  return (

    <div className=" container-fluid d-flex card border-black " >
      <div className="row g-0">
        <div className="col-md-1 ms-1 mt-2 mb-2">
          <img className="ms-1 me-2" src={picture} alt="..." />
        </div>
        <div className="col-md-6 text-start ">
          <div className="card-body mt-1 ps-5 fs-6">
            <h5 className="card-text mb-0 fs-6">First name: {firstName}</h5>
            <h5 className="card-text mb-0 fs-6">Last name: {lastName}</h5>
            <h5 className="card-text mb-0 fs-6">Gender: {gender}</h5>
            <h5 className="card-text mb-0 fs-6">Height: {height / 100}m</h5>
            <h5 className="card-text mb-0 fs-6">Birth: {birth.toLocaleDateString("en", options).split(',')}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdCard;