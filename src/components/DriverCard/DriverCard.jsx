import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {
    let background = {
        backgroundColor: 'blue',
        color: 'white'
    }

    const num = Math.round(rating)
    let stars
    if (num === 0) stars = '✰✰✰✰✰'
    else if (num === 1) stars = '★✰✰✰✰'
    else if (num === 2) stars = '★★✰✰✰'
    else if (num === 3) stars = '★★★✰✰'
    else if (num === 4) stars = '★★★★✰'
    else if (num === 5) stars = '★★★★★'

    return (
        <div style={background} className="DriverCard">
            <div>
                <img className="ImageDrive" src={img} alt={name} />
            </div>
            <div>
                <p>{name}</p>
                <p>{stars}</p>
                <p>{car.model}</p>
                <p>{car.licensePlate}</p>

            </div>
        </div>
    )
}
export default DriverCard

// name: A string
// rating: A number between 0 and 5. The value can be a floating point number.
//     img: A string
// car: An object with properties model and licensePlate.