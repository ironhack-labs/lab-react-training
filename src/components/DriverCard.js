import '../App.css'

function DriverCard({ name, rating, img, car })  {
    return (
      <div className="driver-card">
        <img className="driver-card-img" src={img} alt={name} />
        <div className="driver-card-info">
          <h2>{name}</h2>
          <div className="driver-card-rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className={index < Math.round(rating) ? 'filled-star' : 'empty-star'}>
                ★
              </span>
            ))}
          </div>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    );
  }
  
export default DriverCard