import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driverCard">
      <div className="row">
        <div className="col">
          <div
            className="card flex-row p-4 m-2 align-items-center"
            style={{ background: '#505BDA', color: 'white' }}
          >
            <img
              className="card-img-left"
              style={{
                height: '150px',
                width: '150px',
                borderRadius: '50%',
              }}
              src={img}
              alt={name}
            />
            <div className="card-body text-start">
              <div className="card-title">
                <h1>{name}</h1>
              </div>
              <div className="card-text">
                <Rating>{rating}</Rating>
              </div>
              <div className="card-text">
                <h5>
                  {car.model} - {car.licensePlate}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
