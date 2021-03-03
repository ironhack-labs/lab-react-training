

function IdCard({ lastName, firstName, gender, height, birth, picture }) {

  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric"
  };

  return (

    <div className=" card mb-3 border-dark " >
      <div className="d-flex ">
        <div>
          <img className=" m-2" src={picture} alt="..." />
        </div>
        <div className="  ">
          <div className="card-body  fs-6">
            <h5 className="card-text mb-0 fs-6 text-bold"><strong>First name:</strong> {firstName}</h5>
            <h5 className="card-text mb-0 fs-6"><strong>Height:</strong> {lastName}</h5>
            <h5 className="card-text mb-0 fs-6"><strong>Gender:</strong> {gender}</h5>
            <h5 className="card-text mb-0 fs-6"><strong>Height:</strong> {height / 100}m</h5>
            <h5 className="card-text mb-0 fs-6"><strong>Birth:</strong> {birth.toLocaleDateString("en", options).split(',')}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}


export default IdCard;