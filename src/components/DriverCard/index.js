export default function DriverCard({ name, rating, img, car }) {
    return (
        <div>
            <div className="driverCar">
                <div className="pic">
                    <img src={img} alt="profile" />
                </div>
                <div className="data">
                    <span className="name">{name}</span>
                    <span className="name">{`${setRating(rating)}`}</span>
                    <span className="car">{car.model} - {car.licensePlate}</span>
                </div>
            </div>

        </div>
    )

    