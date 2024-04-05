import "./DriverCard.css";

function DriverCard({ name, rating, img, car }) {
    return (
            <div className="borderDriverCard">
                <div>
                    <img className="image" src="{img}"/>
                </div>
                <div>
                    <h3>{name}</h3>
                    <span>
                        {Math.round(rating) >= 1 ? <i className="fa fa-star" aria-hidden="true"></i> : <i className="fa fa-star-o" aria-hidden="true"></i>}
                        {Math.round(rating) >= 2 ? <i className="fa fa-star" aria-hidden="true"></i> : <i className="fa fa-star-o" aria-hidden="true"></i>}
                        {Math.round(rating) >= 3 ? <i className="fa fa-star" aria-hidden="true"></i> : <i className="fa fa-star-o" aria-hidden="true"></i>}
                        {Math.round(rating) >= 4 ? <i className="fa fa-star" aria-hidden="true"></i> : <i className="fa fa-star-o" aria-hidden="true"></i>}
                        {Math.round(rating) >= 5 ? <i className="fa fa-star" aria-hidden="true"></i> : <i className="fa fa-star-o" aria-hidden="true"></i>}
                    </span>
                    <p>{car.model} - {car.licensePlate}</p>
                </div>
            </div>
    )
}

export default DriverCard;