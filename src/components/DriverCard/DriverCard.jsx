import "./DriverCard.css"

const DriverCard = ({ name, rating, img, car }) => {
    const rateNum = Math.round(rating)
    let userRating

    switch (rateNum) {
        case 0:
            userRating = <p>☆☆☆☆☆</p>;
            break;
        case 1:
            userRating = <p>★☆☆☆☆</p>;
            break;
        case 2:
            userRating = <p>★★☆☆☆</p>;
            break;
        case 3:
            userRating = <p>★★★☆☆</p>
            break;
        case 4:
            userRating = <p>★★★★☆</p>
            break;
        case 5:
            userRating = <p>★★★★★</p>;
            break;
    }

    return (
        <article className="driverCard">
            <img src={img} alt={name} className='driverImg' />
            <article className="driverData">
                <h2>{name}</h2>
                {userRating}
                <p>{car.model} - {car.licensePlate}</p>
            </article>
        </article>
    )



}


export default DriverCard;