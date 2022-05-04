import './driverCard.css'
import Rating from '../Rating/rating'

const DriverCard = ({ name, rating, img, car }) => {
    const { model, licensePlate} = car


    // let ratingValue = Math.round(rating)
    // let stars = ''

    // if (ratingValue === 0) {
    //     stars = '☆☆☆☆☆'
    // } else if (ratingValue === 1) {
    //     stars = '★☆☆☆☆'
    // } else if (ratingValue === 2) {
    //     stars = '★★☆☆☆'
    // } else if (ratingValue === 3) {
    //     stars = '★★★☆☆'
    // } else if (ratingValue === 4) {
    //     stars = '★★★★☆'
    // } else if (ratingValue === 5) {
    //     stars = '★★★★★'
    // }

    return (
        <article className="driver">
            <img src={img} alt={img} />
            <p>{name}</p>
            <Rating>{rating}</Rating> 
            <p>{model}</p>
            <p>{licensePlate}</p>
        </article>
    )
}
export default DriverCard