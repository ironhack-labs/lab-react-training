import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {

    let starRating = ''

    switch (Math.round(rating)) {
        case 0:
            starRating = '☆☆☆☆☆';
            break;
        case 1:
            starRating = '★☆☆☆☆';
            break;
        case 2:
            starRating = '★★☆☆☆';
            break;
        case 3:
            starRating = '★★★☆☆';
            break;
        case 4:
            starRating = '★★★★☆';
            break;
        case 5:
            starRating = '★★★★★';
            break;
    }


    return (
        <div className='driver-card'>
            <img className="driver-img" src={img} alt='Profile picture' />
            <footer>
                <p><b>{name}</b></p>
                <p>{starRating}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </footer>
        </div>
    )
}

export default DriverCard