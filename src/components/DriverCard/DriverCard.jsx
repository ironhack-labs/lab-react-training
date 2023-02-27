import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {

    const roundedNum = Math.round(rating)
    let stars

    if (roundedNum == 0) {
        stars = '✰✰✰✰✰'
    }
    else if (roundedNum == 1) {
        stars = '★✰✰✰✰'
    }
    else if (roundedNum == 2) {
        stars = '★★✰✰✰'
    }
    else if (roundedNum == 3) {
        stars = '★★★✰✰'
    }
    else if (roundedNum == 4) {
        stars = '★★★★✰'
    }
    else if (roundedNum == 5) {
        stars = '★★★★★'
    }

    return (
        <div className='DriverCard'>
            <img src={img} alt="image" />
            <div>
                <div className='DriverCardName'>
                    <p>{name}</p>
                    <p>{stars}</p>
                </div>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard
