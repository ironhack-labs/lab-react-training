import './DriverCard.css'

const DriverCard = props => {
    const { name, rating, img, car } = props

    const Rating = rating => {
        if (rating == 4) {
            return <div>★ ★ ★ ★ ☆</div>
        } else if (rating == 5) {
            return <div>★ ★ ★ ★ ★</div >
        }
    }
    return (
        <div>
            <h1>{name}</h1>

            <img src={img}></img>
            <p>{car.model}</p>
            <p>{Rating(rating)}</p>
            <p>{car.licensePlate}</p>


        </div >
    )



}



export default DriverCard



