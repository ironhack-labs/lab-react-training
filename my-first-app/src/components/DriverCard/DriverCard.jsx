import './DriverCard.css'
const DriverCard = ({ name, rating, img, car }) => {
    const ratingRound = Math.round(rating)
    const { model, licensePlate } = car


    const renderSwitch = (ratingRound) => {
        switch (ratingRound) {
            case 0:
                return '☆☆☆☆☆'
            case 1:
                return '★☆☆☆☆'
            case 2:
                return '★★☆☆☆'
            case 3:
                return '★★★☆☆'
            case 4:
                return '★★★★☆'
            case 5:
                return '★★★★★'
        }
    }

    return (
        <article className="driverCard">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="info">
                <p>{name}</p>
                <p>{renderSwitch(ratingRound)}</p>

                <p>{model}</p>
                <p>{licensePlate}</p>
            </div>

        </article>
    )
}

export default DriverCard