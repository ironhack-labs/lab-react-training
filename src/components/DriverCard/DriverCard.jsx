import './DriverCard.css'

const DriverCard = props => {

    const { name, rating, img, car } = props

    const {model, licensePlate} = car
  
    let rate = Math.round(rating)

    let stars
    switch (rate) {
        case 1:
            stars = '★☆☆☆☆'
            break
        case 2:
            stars = '★★☆☆☆'
            break
        case 3:
            stars = '★★★☆☆'
            break
        case 4:
            stars = '★★★★☆'
            break
        case 5:
            stars = '★★★★★'
            break
        default:
            stars = '☆☆☆☆☆'
            break
    }

    return (
        
        <div className='driverCard'>

            <img src={img} alt="img" />
            <div className='driverData'>
                <h2>{name}</h2>
                <h2>{stars}</h2>
                <p>{model} - {licensePlate}</p>
            </div>

        </div>
    )
}

export default DriverCard