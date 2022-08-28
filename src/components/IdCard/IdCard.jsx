import './idCard.css'

function IdCard({picture, firstName, lastName, gender, height, birth}) {
  return (
    < div className="card mb-3 container-card" >
      <div className="row g-0">
        <div className="col-md-3 p-2">
          <img src={ picture } className="img-fluid rounded-start" alt="img" />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h6 className="card-text"><b>First name:</b> { firstName }</h6>
            <h6 className="card-text"><b>Last name</b>: { lastName }</h6>
            <h6 className="card-text"><b>Gender</b>: { gender }</h6>
            <h6 className="card-text"><b>Height</b>: { height/100 }</h6>
            <h6 className="card-text"><b>Birth</b>: { birth.toDateString() }</h6>
          </div>
        </div>
      </div>
    </div >
  )
}

export default IdCard