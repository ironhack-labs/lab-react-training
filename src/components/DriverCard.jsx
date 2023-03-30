import Rating from "./Rating"


function DriverCard({ name, rating, img, car }) {
  const divStyle = {
    width: 90,
    height: 90
    
  }

  return (
   <div className="card border rounded-3 m-3 d-flex flex-row justify-content-center align-items-center text-white">
     <div className="">
      <img className="rounded-circle m-3" src={img} alt="ProfileImg" style={divStyle}/>
     </div>
     <div className="mt-3 align-items-center">
      <h3 className="mb-0 ms-4">{name}</h3>
      <h3  className="mb-0 ms-0"><Rating>{rating}</Rating></h3>
      <h3 className="ms-4">{car.model} - {car.licensePlate}</h3>
     </div>
   </div>
  )
}


DriverCard.defaultProps = {
  name: '',
  rating: '',
  img: '',
  car: '',
}


export default DriverCard