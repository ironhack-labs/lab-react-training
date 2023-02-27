import './DriverCard.css'
import Rating from "../Rating/Rating"

const DriverCard = ({ driverInfo }) => {
    const { name, rating, img, car } = driverInfo

    let background = {
        backgroundColor: 'blue',
        color: 'white'
    }

    return (
        <div style={background} className="DriverCard">
            <div>
                <img className="ImgDrive" src={img} alt="profil-photo" />
            </div>
            <div className='textDriver'>
                <Rating>{rating}</Rating>
                <h4>{name}</h4>
                <p>{car[0].model}-{car[0].licensePlate}</p>
            </div>

        </div>
    )
}

export default DriverCard