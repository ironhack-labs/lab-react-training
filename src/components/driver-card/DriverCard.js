import Rating from './../ratings/Rating';





const style = {

  backgroundColor: 'blue',
  color: 'white',
  border: 'border-black solid',
  textAlign: 'text-center'

}



function DriverCard({ name, rating, img, car }) {

  return (
    <div className="  d-flex card" style={style} >
      <div className="row g-0">
        <div className="col-md-1 ms-1 mt-2 mb-2">
          <img className="me-5" width="80" src={img} className="rounded-circle" alt="..." />
        </div>
        <div className="col-md-6 text-start ">
          <div className="card-body mt-1 ps-5 fs-6">
            <h5 className="card-text mb-1 fs-4">{name}</h5>
            <Rating>{(rating)}</Rating>
            <h5 className="card-text fs-5">{car.model} - {car.licensePlate}</h5>          </div>
        </div>
      </div>
    </div>

  )
}
export default DriverCard             