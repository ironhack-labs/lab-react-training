import Rating from "../Rating/Rating"


function DriverCard ({name, rating, img, car}){
    return (
        <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img} style = {{borderRadius: `100px`, width: `20%` }}  className="img-fluid d-flex " alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h4><Rating children={rating} /></h4>
        <p className="card-text">{car.model}-{car.licensePlate}</p>
       
      </div>
    </div>
  </div>
</div>
    )
}

export default DriverCard