import './DriverCard.css'
const DriverCard = ({ name, rating, img, car, model, licensePlate }) => {
    const round = Math.round(rating)
    switch (round) {
        case 1:
            rating = <p>★☆☆☆☆</p>
            break;
        case 2:
            rating = <p>★★☆☆☆</p>
            break;
        case 3:
            rating = <p>★★★☆☆</p>
            break;
        case 4:
            rating = <p>★★★★☆</p>
            break;
        case 5:
            rating = <p>★★★★★</p>
    }
    return (
        <>
            <div className="general">
                <p>{name}</p>
                <p>{rating}</p>
                <div className="profileImg"><img src={img} alt="" />
                </div>
                <p>{car.model}</p>
                <p>{car.licensePlate}</p>
            </div>
        </>
    )
}
export default DriverCard