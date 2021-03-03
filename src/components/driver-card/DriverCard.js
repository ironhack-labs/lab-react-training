import Rating from './../ratings/Rating';

const style = {

  backgroundColor: 'blue',
  color: 'white',
  border: 'border-dark', 

}

function DriverCard({ name, rating, img, car, className }) {

  return (
    <div className=" d-flex justify-content-center rounded-3" style={style} >
     
        <div className="col-md-1 ms-1 mt-2 mb-2">
          <img className="me-5" width="80" src={img} className="rounded-circle" alt="..." style={{ backgroundSize: 'cover', width: '85px', height: '85px' }}/>
        </div>
        <div className="col-md-6 text-start ">
          <div className="card-body mt-1 ps-5 fs-6">
            <h5 className="card-text mb-1 fs-4">{name}</h5>
            <Rating>{(rating)}</Rating>
            <h5 className="card-text fs-5">{car.model} - {car.licensePlate}</h5>          </div>
        </div>
      
    </div>

  )
}
export default DriverCard             