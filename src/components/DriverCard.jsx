import './DriverCard.css';

function DriverCard({ name, rating, img, car }) {
  function stars() {
    if (rating < 0.5) return '☆☆☆☆☆';
    else if (rating < 1.5) return '★☆☆☆☆';
    else if (rating < 2.5) return '★★☆☆☆';
    else if (rating < 3.5) return '★★★☆☆';
    else if (rating < 4.5) return '★★★★☆';
    else if (rating < 5.5) return '★★★★★';
  }

  return (
    <div>
      <div className="card driver mb-2">
        <div className="card-body container d-flex justify-content-center align-items-center">
          <img className="rounded-circle img-driver" src={img} alt="driver" />
          <div className="text-container text-light ms-4">
            <h1 className="fw-bolder">{name}</h1>
            <h2>{stars(rating)}</h2>
            <h3>
              {car.model} {car.licensePlate}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
